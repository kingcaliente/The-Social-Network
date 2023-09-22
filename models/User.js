const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
}, {
  toJSON: {
    virtuals: true
  }
});

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    
  },
  createdAt: {
    type: Date,
    default: Date.now,
    
  },
  username: {
    type: String,
    required: true
  },
  reactions: [ReactionSchema]
}, {
  toJSON: {
    virtuals: true
  }
});

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    
  }
});

const User = mongoose.model('User', UserSchema);
const Thought = mongoose.model('Thought', ThoughtSchema);
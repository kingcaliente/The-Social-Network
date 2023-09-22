const express = require('express');
const router = express.Router();
// const { User, Thought } = require('./models');

router.get('/api/users', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

router.get('/api/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

router.post('/api/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// And so on for the other routes

module.exports = router;
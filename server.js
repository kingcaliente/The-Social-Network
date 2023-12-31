const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const thoughtRoutes = require('./controllers/Thought-Controller.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/thoughts', thoughtRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);

app.use('/api/users', require('./routes/api/userRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
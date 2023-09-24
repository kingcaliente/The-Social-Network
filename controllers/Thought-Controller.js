const express = require('express');
const router = express.Router();
const Thought = require('../models/Thought');


router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/:id', getThought, (req, res) => {
  res.json(res.thought);
});


router.post('/', async (req, res) => {
  const thought = new Thought({
    title: req.body.title,
    content: req.body.content
  });

  try {
    const newThought = await thought.save();
    res.status(201).json(newThought);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.patch('/:id', getThought, async (req, res) => {
  if (req.body.title) res.thought.title = req.body.title;
  if (req.body.content) res.thought.content = req.body.content;

  try {
    const updatedThought = await res.thought.save();
    res.json(updatedThought);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.delete('/:id', getThought, async (req, res) => {
  try {
    await res.thought.remove();
    res.json({ message: 'Deleted Thought' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getThought(req, res, next) {
  let thought;
  try {
    thought = await Thought.findById(req.params.id);
    if (thought == null) {
      return res.status(404).json({ message: 'Cannot find thought' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.thought = thought;
  next();
}

module.exports = router;

// routes/classRoutes.js
const express = require('express');
const router = express.Router();
const Class = require('../models/Class');

// GET all classes
router.get('/', async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific class
router.get('/:id', getClass, (req, res) => {
  res.json(res.class);
});

// Middleware to get a specific class by ID
async function getClass(req, res, next) {
  let classItem;
  try {
    classItem = await Class.findById(req.params.id);
    if (classItem == null) {
      return res.status(404).json({ message: 'Class not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.class = classItem;
  next();
}

module.exports = router;

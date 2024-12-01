const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Update profile
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { username, bio, profilePic } = req.body;

  const updatedUser = await User.findByIdAndUpdate(id, { username, bio, profilePic }, { new: true });
  res.json(updatedUser);
});

// Fetch user profile
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json(user);
});

module.exports = router;

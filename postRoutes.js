const express = require('express');
const Post = require('../models/Post');
const cloudinary = require('../config/cloudinaryConfig');

const router = express.Router();

// Create a new post
router.post('/create', async (req, res) => {
  const { userId, caption } = req.body;
  const image = req.files.image;

  const uploadResult = await cloudinary.uploader.upload(image.tempFilePath);
  const newPost = new Post({ userId, imageUrl: uploadResult.secure_url, caption });
  await newPost.save();

  res.status(201).json({ message: 'Post created successfully', post: newPost });
});

// Fetch all posts
router.get('/', async (req, res) => {
  const posts = await Post.find().populate('userId', 'username');
  res.json(posts);
});

module.exports = router;

const express = require('express');
const Message = require('../models/message');


const router = express.Router();

// Send a message
router.post('/send', async (req, res) => {
  const { senderId, receiverId, text } = req.body;
  const newMessage = new Message({ senderId, receiverId, text });
  await newMessage.save();
  res.status(201).json({ message: 'Message sent', messageData: newMessage });
});

// Fetch messages between two users
router.get('/:senderId/:receiverId', async (req, res) => {
  const { senderId, receiverId } = req.params;
  const messages = await Message.find({
    $or: [
      { senderId, receiverId },
      { senderId: receiverId, receiverId: senderId },
    ],
  });
  res.json(messages);
});

module.exports = router;

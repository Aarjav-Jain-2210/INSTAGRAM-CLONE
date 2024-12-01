const mongoose = require('mongoose');

// Define the message schema
const messageSchema = new mongoose.Schema({
  senderId: { type: String, required: true },
  receiverId: { type: String, required: true },
  text: { type: String, required: true },
}, { timestamps: true });

// Create and export the Message model
const Message = mongoose.model('Message', messageSchema);

module.exports = Message;

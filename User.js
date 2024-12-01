const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  profilePic: String,
  bio: String,
  following: [String],  // Array of user IDs
});

module.exports = mongoose.model('User', userSchema);

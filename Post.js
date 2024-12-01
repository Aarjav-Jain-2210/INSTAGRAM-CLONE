const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  imageUrl: { type: String, required: true },
  caption: { type: String },
  likes: { type: [mongoose.Schema.Types.ObjectId], ref: 'User', default: [] },
  comments: [{ userId: mongoose.Schema.Types.ObjectId, text: String }],
});

module.exports = mongoose.model('Post', PostSchema);

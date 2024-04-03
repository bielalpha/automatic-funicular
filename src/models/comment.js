const mongoose = require('mongoose');

// Comment schema
const commentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Comment model
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;

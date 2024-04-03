const express = require("express");
const router = express.Router();
const { createComment, getCommentsByPost, updateComment, deleteComment } = require('../controllers/comment.controller');

// Routes
router.post('/createComment/:id', createComment);
router.get('/getCommentsByPost/:id', getCommentsByPost);
router.put('/updateComment/:id', updateComment);
router.delete('/deleteComment/posts/:postId/comments/:commentId', deleteComment);

module.exports = router;

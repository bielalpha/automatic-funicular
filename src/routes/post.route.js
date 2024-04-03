const express = require("express");
const router = express.Router();
const { createPost, getPosts, getPost, updatePost, deletePost } = require('../controllers/post.controller');

// Post routes
router.post('/createPost', createPost);
router.get('/getPosts', getPosts);
router.get('/getPost/:id', getPost);
router.put('/updatePost/:id', updatePost);
router.delete('/deletePost/:id', deletePost);


module.exports = router;
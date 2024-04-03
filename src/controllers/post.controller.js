const Post = require('../models/post');
const Comment = require('../models/comment');

const createPost = async (req, res) => {
    try {
        // Create post
        const post = await Post.create(req.body);
        // Send success response
        return res.send({ post });
    } catch (error) {
        // Send error response
        res.status(400).send({ error: error.message });
    }
};

const getPosts = async (req, res) => {
    try {
        // Get all posts
        const posts = await Post.find({});
        // Send success response
        return res.send({ posts });
    } catch (error) {
        // Send error response
        res.status(500).send({ message: error.message });
    }
};

const getPost = async (req, res) => {
    try {
        // Get post id
        const { id } = req.params;
        // Get post
        const post = await Post.findById(id);
        // Check if post exists
        return res.send({ post });
    } catch (error) {
        // Send error response
        res.status(500).send({ message: error.message });
    }
};

const updatePost = async (req, res) => {
    try {
        // Get post id
        const { id } = req.params;
        // Update post
        const post = await Post.findByIdAndUpdate(id, req.body)
        // Check if post exists
        if (!post) {
            return res.status(404).send({ message: "Post not found" });
        }
        // Get updated post
        const updatedProduct = await Post.findById(id);
        // Send success response
        return res.send({ updatedProduct });
    }
    catch (error) {
        // Send error response
        res.status(500).send({ message: error.message });
    }
};

const deletePost = async (req, res) => {
    try {
        // Get post id
        const { id } = req.params;

        // Remove post
        const post = await Post.findByIdAndDelete(id);
        // Check if post exists
        if (!post) {
            return res.status(404).send({ message: "Post not found" });
        }
        // Remove comments associated with the post
        await Comment.deleteMany({ _id: { $in: post.comments }});
        // Send success response
        return res.send({ message: "Post deleted successfully" });
    } catch (error) {
        // Send error response
        res.status(500).send({ message: error.message });
    }
};

module.exports = {
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost
};
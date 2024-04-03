const Comment = require('../models/comment');
const Post = require('../models/post');

const createComment = async (req, res) => {
    try {
        // Get the post id from the request parameters
        const { id } = req.params;
        // Create a new comment
        const comment = await Comment.create(req.body);
        // Find the post by id and push the comment id into the comments array
        const post = await Post.findByIdAndUpdate(id, { $push: { comments: comment._id } }, { new: true });
        // If the post does not exist, return an error
        if (!post)
            return res.status(404).send({ error: 'Post not found' });
        // Return the comment and the post
        return res.send({ comment, post });
    } catch (error) {
        // If an error occurs, return the error message
        return res.status(400).send({ error: error.message });
    }
};

const getCommentById = async (req, res) => {
    try {
        // Get the comment id from the request parameters
        const { id } = req.params;
        // Find the comment by id
        const comment = await Comment.findById(id);
        // If the comment does not exist, return an error
        if (!comment)
            return res.status(404).send({ error: 'Comment not found' });
        // Return the comment
        return res.send({ comment });
    } catch (error) {
        // If an error occurs, return the error message
        return res.status(400).send({ error: error.message });
    }
}

const getCommentsByPost = async (req, res) => {
    try {
        // Get the post id from the request parameters
        const { id } = req.params;
        // Find the post by id and populate the comments array
        const post = await Post.findById(id).populate('comments');
        // If the post does not exist, return an error
        if (!post)
            return res.status(404).send({ error: 'Post not found' });
        // Return the comments array
        return res.send({ comments: post.comments });
    } catch (error) {
        // If an error occurs, return the error message
        return res.status(400).send({ error: error.message });
    }
};

const updateComment = async (req, res) => {
    try {
        // Get the comment id from the request parameters
        const { id } = req.params;
        // Find the comment by id and update it with the request body
        const comment = await Comment.findByIdAndUpdate(id, req.body, { new: true });
        // If the comment does not exist, return an error
        if (!comment)
            return res.status(404).send({ error: 'Comment not found' });
        // Return the updated comment
        return res.send({ comment });
    }
    catch (error) {
        // If an error occurs, return the error message
        return res.status(400).send({ error: error.message });
    }
}

const deleteComment = async (req, res) => {
    try {
        // Get the post id and comment id from the request parameters
        const { postId, commentId } = req.params;
        // Find the comment by id and delete it
        const comment = await Comment.findByIdAndDelete(commentId);
        // If the comment does not exist, return an error
        if (!comment)
            return res.status(404).send({ error: 'Comment not found' });
        // Find the post by id and pull the comment id from the comments array
        const post = await Post.findByIdAndUpdate(postId, { $pull: { comments: commentId } }, { new: true });
        // If the post does not exist, return an error
        if (!post)
            return res.status(404).send({ error: 'Post not found' });
        // Return a success message
        return res.send({ message: 'Comment deleted successfully' });
    }
    catch (error) {
        // If an error occurs, return the error message
        return res.status(400).send({ error: error.message });
    }
}



module.exports = {
    createComment,
    getCommentsByPost,
    updateComment,
    deleteComment
};
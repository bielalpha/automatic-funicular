const express = require('express');
const bodyParser = require('body-parser');
const postRoute = require('./routes/post.route');
const commentRoute = require('./routes/comment.route');

// Initialize express app
const app = express();
// Set port
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/post', postRoute);
app.use('/api/comment', commentRoute);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
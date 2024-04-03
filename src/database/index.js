const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority&appName=backendDB`);
mongoose.Promise = global.Promise;

module.exports = mongoose;
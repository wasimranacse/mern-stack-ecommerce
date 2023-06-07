require('dotenv').config();

// Access server port
const serverPort = process.env.SERVER_PORT || 3002; 
const mongodbUrl = process.env.MONGODB_ATLAS_URL || 'mongodb://localhost:27017/eCommerceMerndb';

module.exports = { serverPort, mongodbUrl };
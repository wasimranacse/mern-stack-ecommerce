require('dotenv').config();

// Access server port
const serverPort = process.env.SERVER_PORT || 3002; 

module.exports = { serverPort };
const mongoose = require('mongoose');
const { mongodbUrl } = require('../secret');

const connectDatabase = async (options = {}) =>{
    try{
        await mongoose.connect(mongodbUrl, options);
        console.log('Connection to Database is working fine and established!');
        mongoose.connection.on('error', (error) => {
            console.error('Database connection error...!', error);
        });
    }
    catch (error) {
        console.error('Could not connect to the Database', error.toString());
    }
};
module.exports = connectDatabase;



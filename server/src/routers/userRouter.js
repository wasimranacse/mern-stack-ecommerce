const express = require('express');
const { getUsers } = require('../controllers/userController');
const userRouter = express.Router();

// Get: api/users
userRouter.get("/", getUsers);

module.exports = userRouter;
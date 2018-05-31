const userController = require('../controllers/userController.js');
const userRouter = require('express').Router();

userRouter.post('/', userController.post);

module.exports = userRouter;
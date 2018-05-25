const taskController = require('../controllers/taskController.js');
const taskRouter = require('express').Router();

taskRouter.get('/', taskController.get);
taskRouter.post('/', taskController.post);
taskRouter.patch('/', taskController.patch);

module.exports = taskRouter;
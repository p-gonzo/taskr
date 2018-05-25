const padController = require('../controllers/padController.js');
const padRouter = require('express').Router();

padRouter.get('/', padController.get);
padRouter.post('/', padController.post);
padRouter.patch('/', padController.patch);

module.exports = padRouter;
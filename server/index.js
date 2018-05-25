// require dependencies
var express = require('express');
var parser = require('body-parser');

const taskRouter = require('./routes/taskRoutes.js');
const padRouter = require('./routes/padRouts.js');
const util = require('./utilities.js');
const db = require('../db/index.js');

// init application
var app = express();

// attach plugins
app.use(util.requestLogger);
app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.json());

// define routes:
app.use('/tasks', taskRouter);
app.use('/pads', padRouter);

var port = process.env.PORT || 9000; 

// listen for requests
app.listen(port, () => {
console.log(`Listening on port ${port}`);
});

db.connectToDb();

// require dependencies
var express = require('express');
var parser = require('body-parser');

const taskRouter = require('./routes/taskRoutes.js');
const padRouter = require('./routes/padRouts.js');
const userRouter = require('./routes/userRouts.js');

const util = require('./utilities.js');
const db = require('../db/index.js');

// init application
var app = express();

// attach plugins
app.use(util.requestLogger);
app.use(parser.json());
app.use(parser.urlencoded())

// define routes:
app.use('/tasks', taskRouter);
app.use('/pads', padRouter);
app.use('/users', userRouter);

//auth middleware --
// if they're authenticated, send them to dashboard -- otherwise,
//send them to login.



app.use('/dashboard', express.static(__dirname + '/../client/dist'));

var port = process.env.PORT || 9000; 

// listen for requests
app.listen(port, () => {
console.log(`Listening on port ${port}`);
});

db.connectToDb();

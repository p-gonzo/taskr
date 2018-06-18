// require dependencies
var express = require('express');
const session = require('express-session');
var parser = require('body-parser');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const taskRouter = require('./routes/taskRoutes.js');
const padRouter = require('./routes/padRouts.js');
const userRouter = require('./routes/userRouts.js');

const util = require('./utilities.js');
const db = require('../db/index.js');

var authMiddleware = require('./auth/authMiddleware.js')

var passport = require('./auth/googleAuth.js');


// init application
var app = express();

// attach plugins
app.use(util.requestLogger);
app.use(parser.json());
app.use(parser.urlencoded());
app.use(bodyParser.urlencoded({extended : false}));

//auth middleware
app.use(cookieParser());


app.use(session({secret: 'this is a super secret thing!'}));

app.use(passport.initialize());
app.use(passport.session());
app.use(authMiddleware);

app.use(express.static(__dirname + '/../client/dist'));


app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => { res.redirect('/');});
app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/logout', (req, res) => {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
});

// define routes:
app.use('/tasks', taskRouter);
app.use('/pads', padRouter);
app.use('/users', userRouter);

app.get('/dashboard*', (req,res) => {
  res.redirect('/');
});

app.get('/login', (req,res) => {
  res.redirect('/');
});


var port = process.env.PORT || 9000; 

// listen for requests
app.listen(port, () => {
console.log(`Listening on port ${port}`);
});

db.connectToDb();

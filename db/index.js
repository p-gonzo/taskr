var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/taskr');

var db = mongoose.connection;

const connectToDb = () => {
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('Connected to db.');
  });
}


module.exports.connectToDb = connectToDb;
//
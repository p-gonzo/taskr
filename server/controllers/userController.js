var userModels = require('../models/userModels.js');
var url = require('url');

module.exports = {

  post: (req, res) => {
    console.log(req.body);
    res.send(200);
    // taskModels.saveTask(req.body.text, req.body.padId)
    //   .then ((data) => {
    //     res.send(data);
    //   })
    //   .catch ((err) => {
    //     console.log(err);
    //   });
  },
} 
var taskModels = require('../models/taskModels.js');
var url = require('url');

module.exports = {
  get: (req, res) => {
    
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    taskModels.getTasks(query.padId)

      .then ((data) => {
        res.send(data);
      })
      .catch ((err) => {
        console.log(err);
      });
  },

  post: (req, res) => {
    taskModels.saveTask(req.body.text, req.body.padId)
      .then ((data) => {
        res.send(data);
      })
      .catch ((err) => {
        console.log(err);
      });
  },

  patch: (req, res) => {
    taskModels.toggleDone(req.body)
      .then ((data) => {
        res.send(data);
      })
      .catch ((err) => {
        console.log(err);
      });
  },
}
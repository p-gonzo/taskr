var taskModels = require('../models/taskModels.js');

module.exports = {
  get: (req, res) => {
    taskModels.getTasks()
      .then ((data) => {
        res.send(data);
      })
      .catch ((err) => {
        console.log(err);
      });
  },

  post: (req, res) => {
    taskModels.saveTask(req.body.text)
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
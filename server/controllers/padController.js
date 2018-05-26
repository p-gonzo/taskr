var padModels = require('../models/padModels.js');

module.exports = {
  get: (req, res) => {
    padModels.getPads()
      .then ((data) => {
        res.send(data);
      })
      .catch ((err) => {
        console.log(err);
      });
  },

  post: (req, res) => {
    padModels.createPad(req.body.color)
      .then ((data) => {
        res.send(data);
      })
      .catch ((err) => {
        console.log(err);
      });
  },

  patch: (req, res) => {
    padModels.updatePad(req.body.padid, req.body.x, req.body.y)
      .then ((data) => {
        res.send(data);
      })
      .catch ((err) => {
        console.log(err);
      });
  },
}
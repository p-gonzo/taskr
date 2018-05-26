var padModels = require('../models/padModels.js');
var url = require('url');

module.exports = {
  get: (req, res) => {

    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    padModels.getPads(query.user)
      .then ((data) => {
        res.send(data);
      })
      .catch ((err) => {
        console.log(err);
      });
  },

  post: (req, res) => {
    console.log(req.body);
    padModels.createPad(req.body.color, req.body.user)
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

  delete: (req, res) => {
    
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    padModels.deletePad(query.padId)
      .then ((data) => {
        res.send(data);
      })
      .catch ((err) => {
        console.log(err);
      });
  },
}
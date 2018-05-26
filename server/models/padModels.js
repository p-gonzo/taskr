var mongoose = require('mongoose');
var Task = require('./taskModels').Task;

let padSchema = mongoose.Schema({
  owner: {type: String, default: '' },
  color: {type: String, default: 'blue'},
  pos_x: {type: Number, default: 100 },
  pos_y: {type: Number, default: 100 },
});

let Pad = mongoose.model('Pad', padSchema);


//returns a promise
let createPad = (string, userName) => {
  return Pad.create({color: string, owner: userName})
};

let getPads = (userName) => {
  console.log(userName);
  return Pad.find({owner: userName})
          //.sort('is_done');
};

let updatePad = (padId, x, y) => {
  return Pad.update({ _id: padId }, { $set: { pos_x: x, pos_y: y }});
};

let deletePad = (padId) => {

  return Task.deleteMany({pad: padId})
    .then(() => {
      return Pad.findByIdAndDelete(padId)
    });

}

module.exports.createPad = createPad;
module.exports.getPads = getPads;
module.exports.updatePad = updatePad;
module.exports.deletePad = deletePad;
var mongoose = require('mongoose');

let padSchema = mongoose.Schema({
  owner: {type: Number, default: 0 },
  color: {type: String, default: 'blue'},
  pos_x: {type: Number, default: 100 },
  pos_y: {type: Number, default: 100 },
});

let Pad = mongoose.model('Pad', padSchema);


//returns a promise
let createPad = (string) => {
  return Pad.create({})
};

let getPads = () => {
  return Pad.find({})
          //.sort('is_done');
};

let updatePad = (pad) => {
  console.log(pad);
 
  //update this.
  return Pad.update({ _id: taskId }, { $set: { is_done: isDone }});
};

module.exports.createPad = createPad;
module.exports.getPads = getPads;
module.exports.updatePad = updatePad;
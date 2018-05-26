var mongoose = require('mongoose');

let taskSchema = mongoose.Schema({
  owner: {type: Number, default: 0 },
  pad: {type: String, default: '0'},
  content: String,
  is_done: {type: String, default: 'false'},
});

let Task = mongoose.model('Task', taskSchema);


//returns a promise
let saveTask = (text, padId) => {
  return Task.create({content: text, pad: padId})
};

let getTasks = (padId) => {
  //console.log(padId);
  return Task.find({pad: padId})
          //.sort('is_done');
};

let toggleDone = (task) => {
  console.log(task);
  var taskId = task._id;
  var isDone = task.is_done;
  if (isDone === 'true') {
    isDone = 'false';
  } else {
    isDone = 'true';
  }

  return Task.update({ _id: taskId }, { $set: { is_done: isDone }});
};

module.exports.saveTask = saveTask;
module.exports.getTasks = getTasks;
module.exports.toggleDone = toggleDone;
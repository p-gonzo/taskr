var mongoose = require('mongoose');

let taskSchema = mongoose.Schema({
  owner: {type: Number, default: 0 },
  pad: {type: Number, default: 0},
  content: String,
  is_done: {type: String, default: 'false'},
});

let Task = mongoose.model('Task', taskSchema);


//returns a promise
let saveTask = (string) => {
  return Task.create({content: string})
};

let getTasks = (pad) => {
  return Task.find({})
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
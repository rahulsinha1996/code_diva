const { Schema, model } = require("mongoose")

const taskSchema = new Schema({
      title: {type: String, require: true},
      status: {type: Boolean, default: false},
      userId: {type: String , require: true}
})

const TaskModel = model("Task", taskSchema);

module.exports = TaskModel;
const mongoose = require("mongoose");

const { studentSchema } = require("./studentmodel");

// Define the schema for the StudentEnrollClass collection
const classSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },

  teacher: {
    type: String,
    required: true,
  },
});

// Create the StudentEnrollClass model
const Class = mongoose.model("Class", classSchema);

exports.Class = Class;
exports.classSchema = classSchema;

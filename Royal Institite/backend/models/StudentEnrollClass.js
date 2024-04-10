const mongoose = require('mongoose');

const { studentSchema } = require("./studentmodel");
const { classSchema } = require("./Class");


// Define the schema for the StudentEnrollClass collection
const studentEnrollClassSchema = new mongoose.Schema({
  Student: {
    type: studentSchema,
    required: true,
  },
  class: {
    type: classSchema,
    required: true,
  },
  enrollmentDate: {
    type: Date,
    default: Date.now,
  },
});

// Create the StudentEnrollClass model
const StudentEnrollClass = mongoose.model('StudentEnrollClass', studentEnrollClassSchema);

module.exports = StudentEnrollClass;

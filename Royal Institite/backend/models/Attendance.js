const mongoose = require('mongoose');

// Define the schema for the attendance table
const attendanceSchema = new mongoose.Schema({
  class_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Create the Attendance model
const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;

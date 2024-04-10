const mongoose = require('mongoose');

// Define the schema for the StudentEnrollClass collection
const studentEnrollClassSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  enrollmentDate: {
    type: Date,
    default: Date.now
  }
});

// Create the StudentEnrollClass model
const StudentEnrollClass = mongoose.model('StudentEnrollClass', studentEnrollClassSchema);

module.exports = StudentEnrollClass;

const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true,
    index: true // Adding index for better performance
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
    index: true // Adding index for better performance
  },
  present: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    index: true // Adding index for better performance
  }
});

// Additional validation to ensure classId and studentId exist
attendanceSchema.path('classId').validate(async function(value) {
  const Class = mongoose.model('Class');
  const count = await Class.countDocuments({ _id: value });
  return count > 0;
}, 'Invalid classId.');

attendanceSchema.path('studentId').validate(async function(value) {
  const Student = mongoose.model('Student');
  const count = await Student.countDocuments({ _id: value });
  return count > 0;
}, 'Invalid studentId.');

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;

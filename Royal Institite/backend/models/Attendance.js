import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  classid: {
    type: String,
    required: true
  }
});

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    idnum: {
      type: Number,
      required: true,
    },
  },
);


const attendanceSchema = new mongoose.Schema({

  classId: {
    type: classSchema,
    required: true,
  },
  studentId: {
    type: studentSchema,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
    index: true, // Adding index for better performance
  },
});

// Additional validation to ensure classId and studentId exist
// attendanceSchema.path("classId").validate(async function (value) {
//   const Class = mongoose.model("Class");
//   const count = await Class.countDocuments({ _id: value });
//   return count > 0;
// }, "Invalid classId.");

// attendanceSchema.path("studentId").validate(async function (value) {
//   const Student = mongoose.model("Student");
//   const count = await Student.countDocuments({ _id: value });
//   return count > 0;
// }, "Invalid studentId.");

export const Attendance = mongoose.model("Attendance", attendanceSchema);

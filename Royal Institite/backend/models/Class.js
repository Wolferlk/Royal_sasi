import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher' // Make sure you have a 'Teacher' model defined
  },
  subject: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  grade: {
    type: Number,
    required: true
  }
});

const Class = mongoose.model('Class', classSchema);

export default Class;

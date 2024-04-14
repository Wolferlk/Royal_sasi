import mongoose from "mongoose";


const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  teacher: {
    type: String,
    required: true

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

export const Classes = mongoose.model("Classes", classSchema);


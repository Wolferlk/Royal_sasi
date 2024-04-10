const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
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
    }
}, { timestamps: true }); // Change 'timestamp' to 'timestamps'

const Student = mongoose.model("Students", studentSchema);

exports.Student = Student;
exports.studentSchema = studentSchema;




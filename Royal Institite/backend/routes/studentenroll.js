import express from 'express';
import { StudentEnrollClass } from '../models/StudentEnrollClass.js';
import { Student } from "../models/studentmodel.js";

const router = express.Router();

router.post('/studentEnrollClass', async (req, res) => {

  try {

    const student = await Student.findById(req.body.studentId);

    const newEnrollment = new StudentEnrollClass({
      class: req.body.class,
      teacher: req.body.teacher,
      date: req.body.date,
      student: student
    });

    const savedEnrollment = await newEnrollment.save();

    res.status(201).json(savedEnrollment);
  }catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get all student enrollments in classes
// router.get('/studentEnrollClass', async (req, res) => {
//   try {
//     const enrollments = await StudentEnrollClass.find();
//     res.status(200).json(enrollments);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Route to get a specific student enrollment by ID
// router.get('/studentEnrollClass/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const enrollment = await StudentEnrollClass.findById(id);
//     if (!enrollment) {
//       return res.status(404).json({ message: 'Student enrollment not found' });
//     }
//     res.status(200).json(enrollment);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Route to delete a specific student enrollment by ID
// router.delete('/studentEnrollClass/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedEnrollment = await StudentEnrollClass.findByIdAndDelete(id);
//     if (!deletedEnrollment) {
//       return res.status(404).json({ message: 'Student enrollment not found' });
//     }
//     res.status(200).json({ message: 'Student enrollment deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

export default router;

// routes/attendance.js
import { Router } from "express";
const router = Router();
import { Attendance } from "../models/Attendance.js";


// POST route to mark attendance
router.post('/', async (req, res) => {
  try {
    const { classId, attendanceList } = req.body;

    // Create attendance records for each student
    const attendancePromises = attendanceList.map(async attendanceItem => {
      const { studentId, present } = attendanceItem;
      const attendance = new Attendance({
        classId,
        studentId,
        present,
        date: new Date() // Save current date and time
      });
      await attendance.save();
    });

    // Wait for all attendance records to be saved
    await Promise.all(attendancePromises);

    res.status(201).json({ message: 'Attendance marked successfully' });
  } catch (error) {
    console.error('Error marking attendance:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
})

router.get('/attendance', async (req, res) => {
  try {
    const attendance = await Attendance.find().populate('classId studentId');
    res.json(attendance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

);

export default router;

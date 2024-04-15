// routes/attendance.js
import { Router } from "express";
import { Attendance } from "../models/Attendance.js";
import { Student } from "../models/studentmodel.js";
import { Classes } from "../models/Classes.js";

const router = Router();

// POST route to mark attendance
router.post("/", async (req, res) => {
  let student = await Student.findOne({
    idnum: req.body.studentId,
  });
  if (!student) return res.status(400).send("student not found");

  let classes = await Classes.findOne({
    classid: req.body.classId,
  });
  if (!classes) return res.status(400).send("classes not found");

  console.log(student);
  console.log(classes);

  let attendance = new Attendance({
    classId: classes,
    studentId: student,
  });

  attendance = await attendance.save();

  res.send(attendance);

  // const attendancePromises = attendanceList.map(async attendanceItem => {
  //   const { studentId, present } = attendanceItem;
  //   const attendance = new Attendance({
  //     classId,
  //     studentId,
  //     present,
  //     date: new Date() // Save current date and time
  //   });
  //   await attendance.save();
  // });

  // Wait for all attendance records to be saved
  //   await Promise.all(attendancePromises);

  //   res.status(201).json({ message: 'Attendance marked successfully' });
  // } catch (error) {
  //   console.error('Error marking attendance:', error);
  //   res.status(500).json({ message: 'Internal server error' });
  // }
});

// GET route to fetch attendance records
router.get("/", async (req, res) => {
  try {
    const attendance = await Attendance.find();
    res.json(attendance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const attendance = await Attendance.find({
      "studentId.idnum": req.params.id,
    });
    res.json(attendance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

import { Router } from "express";
import { Student } from "../models/studentmodel.js";
import { StudentEnrollClass } from "../models/StudentEnrollClass.js";

const router = Router();

router.get('/', async (req, res) => {

    try {
        
        let enroll = await StudentEnrollClass.find();

        res.send(enroll);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

router.get("/:id", async (req, res) => {
  try {
    let enroll = await StudentEnrollClass.find({
        'student._id' : req.params.id
    });

    res.send(enroll);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.post("/", async (request, response) => {
  try {

    let student = await Student.findById(request.body.id);

    console.log(student);

    let enroll = {
      class: request.body.class,
      teacher: request.body.teacher,
      student: student,
    };

    enroll = await StudentEnrollClass.create(enroll);
    return response.status(201).send(enroll);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;

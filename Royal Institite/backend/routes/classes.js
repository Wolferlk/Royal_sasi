const express = require("express");
const router = express.Router();
const { Class } = require('../models/Class');

router.get("/", async (req, res) => {
  const classes = await Class.find();
  res.send(classes);
});

router.get("/:id", async (req, res) => {
  const classes = await Class.findById(req.params.id);
  res.send(classes);
});

router.post("/", async (req, res) => {

  let newClass = new Class({
   className: req.body.className,
   teacher: req.body.teacher
  });

  newClass = await newClass.save();

  res.send(newClass);
});

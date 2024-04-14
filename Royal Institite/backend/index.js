import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Student } from "./models/studentmodel.js";
import studentsroute from './routes/studentsroute.js';
import enroll from './routes/enroll.js';



import cors from 'cors'; // Import cors package

const app = express();

app.use(express.json());
app.use(cors()); // Use cors middleware

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('welcome to MERN');
});


app.use('/student', studentsroute);
app.use("/enroll", enroll);





mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('app connected to DB');

        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });

    })
    .catch((error) => {
        console.log(error);
    });

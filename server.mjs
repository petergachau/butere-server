import express from 'express';
import fileUpload from 'express-fileupload'

import path from 'path'
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import authRoutes from "./routes/auth.js";
import studentRoutes from './routes/student.js'
import teacherRoutes from './routes/teacher.js'
import tenderRoute from './routes/tender.js'
import newsRoute from './routes/news.js'
import meetingRoute from './routes/meeting.js'
import eventRoute from './routes/events.js'
import stuffRoute from './routes/stuff.js'
import fileRoute from './routes/ass.js'
import {fileURLToPath} from 'url';
import adminRoute from './routes/admin.js'
import tenderFormRoute from './routes/tenderForm.js'
import feesRoute from './routes/fees.js'
import resultsRoute from './routes/results.js'



const __filename = fileURLToPath(import.meta.url);


dotenv.config()


const app=express()
const PORT=5000;


app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => res.send('Hello Butere School'));

app.post("/upload", (req, res) => {
  const filename = Date.now() + "_" + req.files.screenshot.name;
  const file = req.files.screenshot;
  let uploadPath = __dirname + "/uploads/" + filename;
  file.mv(uploadPath, (err) => {
    if (err) {
      return res.send(err);
    }
  });
  res.send(200);
});
app.use('/uploads', express.static(path.join(__filename, 'uploads')));

// route middlewares
app.use("/api", authRoutes);
app.use("/student", studentRoutes);
app.use("/teacher", teacherRoutes);
app.use("/tender", tenderRoute);
app.use("/news", newsRoute);
app.use("/meeting", meetingRoute);
app.use("/events", eventRoute);
app.use("/stuff", stuffRoute);
app.use("/ass", fileRoute);
app.use("/stats", adminRoute);
app.use("/tenderform", tenderFormRoute);
app.use("/fees", feesRoute);
app.use("/results", resultsRoute);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));


mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));





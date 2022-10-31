import express from 'express';


import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import authRoutes from "./routes/auth.js";
dotenv.config()


const app=express()
const PORT=5000;


app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => res.send('Hello Butere School'));

// route middlewares
app.use("/api", authRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));


mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));

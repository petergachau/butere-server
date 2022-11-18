import express from "express";
import { createMeeting, getMeeting } from "../controllers/meeting.js";
import { createTeacher, deleteStudent, getStudentByUser, getStudents } from "../controllers/teacher.js";
import { createTender, gettenders } from "../controllers/tender.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// search

router.get("/search:key", async (req,res)=>{
    let result=await TourModal.find({
      "$or":[
        {
          adm:{$regex:req.params.key},
          
        }
      ]
    })
    res.send(result)
  });


router.get("/", getMeeting);
// router.get("/:id", getTour);

router.post("/", auth, createMeeting);
// router.delete("/:id", auth, deleteStudent);
// // router.patch("/:id", auth, updateStudent);
// router.get("/userStudents/:id", auth, getStudentByUser);


export default router;

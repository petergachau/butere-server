import express from "express";
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


router.get("/", gettenders);
// router.get("/:id", getTour);

router.post("/", auth, createTender);
// router.delete("/:id", auth, deleteStudent);
// // router.patch("/:id", auth, updateStudent);
// router.get("/userStudents/:id", auth, getStudentByUser);


export default router;

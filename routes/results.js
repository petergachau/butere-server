import express from "express";
import { createAss, getAss } from "../controllers/ass.js";
import { createResults, getResults } from "../controllers/results.js";
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


router.get("/", getResults);
// router.get("/:id", getTour);

router.post("/", auth, createResults);
// router.delete("/:id", auth, deleteStudent);
// // router.patch("/:id", auth, updateStudent);
// router.get("/userStudents/:id", auth, getStudentByUser);


export default router;

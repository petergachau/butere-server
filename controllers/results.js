import mongoose from 'mongoose'
import ResultsModal from '../models/results.js';


export const createResults = async (req, res) => {
  const tour = req.body;
  const newTour = new ResultsModal({
    ...tour,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newTour.save();
    res.status(201).json(newTour);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};


export const getResults= async (req,res)=>{
    
    try {
       const student=  await ResultsModal.find()
    res.json(student) 
    } catch (error) {
        res.status(404).json({ message: "Something went wrong" });

    }
}

// export const getStudentByUser = async (req, res) => {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(404).json({ message: "User doesn't exist" });
//     }
//     const userTours = await TeacherModal.find({ creator: id });
//     res.status(200).json(userTours);
//   };

//   export const deleteStudent = async (req, res) => {
//     const { id } = req.params;
//     try {
//       if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ message: `No tour exist with id: ${id}` });
//       }
//       await TeacherModal.findByIdAndRemove(id);
//       res.json({ message: "Tour deleted successfully" });
//     } catch (error) {
//       res.status(404).json({ message: "Something went wrong" });
//     }
//   };

//   //update


  
// // export const updateStudent= async (req, res) => {
    
  
// //     const todo = await TeacherModal.findById(req.params.id);
  
// //     if (!todo) return res.status(404).send("Todo not found...");
  
// //     const {clas,joh,club,activity,archievements ,imageFile} = req.body;
  
// //     const updatedTodo = await Todo.findByIdAndUpdate(
// //       req.params.id,
// //       {adm,clas,club,activity,archievements ,imageFile},
// //       { new: true }
// //     );
  
// //     res.send(updatedTodo);
// //   };
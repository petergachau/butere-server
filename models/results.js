import mongoose from 'mongoose'

const teacherSchema=  mongoose.Schema({
subject:{type:String,required:true},


imageFile:{type:String},
creator: String,
createdAt: {
    type: Date,
    default: new Date(),
  },

},
{timestamps:true})

const ResultsModal = mongoose.model("result", teacherSchema);

export default ResultsModal;
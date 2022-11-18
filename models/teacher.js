import mongoose from 'mongoose'

const teacherSchema=  mongoose.Schema({
empNo:{type:String,required:true},
subjects:{type:String,required:true},
role:{type:String ,required:true},
classes:{type:String},

imageFile:{type:String},
creator: String,
createdAt: {
    type: Date,
    default: new Date(),
  },

},
{timestamps:true})

const TeacherModal = mongoose.model("teacher", teacherSchema);

export default TeacherModal;

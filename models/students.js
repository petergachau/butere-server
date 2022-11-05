import mongoose from 'mongoose'

const studentSchema=  mongoose.Schema({
clas:{type:String,required:true},
adm:{type:String,required:true},
club:{type:String},
activity:{type:String},
archievements:{type:String},
imageFile:{type:String},
creator: String,
createdAt: {
    type: Date,
    default: new Date(),
  },

},
{timestamps:true})

const StudentModal = mongoose.model("student", studentSchema);

export default StudentModal;

import mongoose from 'mongoose'

const teacherSchema=  mongoose.Schema({
empNo:{type:String,required:true},
role:{type:String,required:true},

imageFile:{type:String},
creator: String,
createdAt: {
    type: Date,
    default: new Date(),
  },

},
{timestamps:true})

const StuffModal = mongoose.model("stuff", teacherSchema);

export default StuffModal;

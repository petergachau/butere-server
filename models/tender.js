import mongoose from 'mongoose'

const teacherSchema=  mongoose.Schema({
title:{type:String,required:true},
desc:{type:String,required:true},
imageFile:String,
creator: String,
createdAt: {
    type: Date,
    default: new Date(),
  },

},
{timestamps:true})

const TenderModal = mongoose.model("tender", teacherSchema);

export default TenderModal;

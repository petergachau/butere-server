import mongoose from 'mongoose'

const teacherSchema=  mongoose.Schema({
title:{type:String,required:true},
desc:{type:String,required:true},
imageFile:{type:String},
creator: String,
createdAt: {
    type: Date,
    default: new Date(),
  },

},
{timestamps:true})

const NewsModal = mongoose.model("news", teacherSchema);

export default NewsModal;

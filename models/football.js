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

const EventsModal = mongoose.model("football", teacherSchema);

export default EventsModal;

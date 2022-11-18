import mongoose from 'mongoose'

const teacherSchema=  mongoose.Schema({
title:{type:String,required:true},
desc:{type:String,required:true},
time:{type:String},
imageFile:{type:String},
creator: String,
createdAt: {
    type: Date,
    default: new Date(),
  },

},
{timestamps:true})

const EventsModal = mongoose.model("event", teacherSchema);

export default EventsModal;

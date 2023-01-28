import mongoose from 'mongoose'

const teacherSchema=  mongoose.Schema({
title:{type:String,required:true},
desc:{type:String,required:true},

creator: String,
createdAt: {
    type: Date,
    default: new Date(),
  },

},
{timestamps:true})

const EventsModal = mongoose.model("point", teacherSchema);

export default EventsModal;

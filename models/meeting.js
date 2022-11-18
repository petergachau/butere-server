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

const MeetingModal = mongoose.model("meeting", teacherSchema);

export default MeetingModal;

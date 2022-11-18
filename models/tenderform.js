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

const TenderForm = mongoose.model("tenderform", teacherSchema);

export default TenderForm;
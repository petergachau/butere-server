import mongoose from 'mongoose'

const heroSchema=  mongoose.Schema({
title:{type:String,required:true},
about:{type:String},
desc:{type:String,required:true},

imageFile:{type:String},
creator: String,
createdAt: {
    type: Date,
    default: new Date(),
  },

},
{timestamps:true})

const heroModal = mongoose.model("hero", heroSchema);

export default heroModal;
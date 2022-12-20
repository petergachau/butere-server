import  bcrypt from 'bcryptjs'
import jwt  from 'jsonwebtoken'
import mongoose from 'mongoose'
import userModel from '../models/user.js'
import nodemailer from 'nodemailer'
// import  User from mongoose.model("User")

const secret="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"
export const signup= async(req,res)=>{
    const {role,email,password,name,clas}=req.body;

    try {
        const oldUser=await userModel.findOne({email});
        if(oldUser){
            return res.status(400).json({message:'user already exist'})
        }

const hashedPassword = await bcrypt.hash(password,12);
const result= await userModel.create({
    email,
    password:hashedPassword,
    name,
    role,
    clas
});
const token =jwt.sign({email:result.email,id:result._id,clas:result.clas,name:result.name,role:result.role },secret,{expiresIn:'1000d'})
res.status(201).json({result,token})

    } catch (error) {console.log(error);
        return res.status(500).json({message:'Signup error try again'})
        
  
    }
}

export const signin = async(req,res)=>{
    const {email,password}=req.body;
    try {
        const oldUser= await userModel.findOne({email});
        if(!oldUser)return res.status(400).json({message:'user with that email does not exist'})

       const ispasswordCorect=await bcrypt.compare(password,oldUser.password);
      if(!ispasswordCorect) return res.status(400).json({message:'invalid credentials'})  

      const token =jwt.sign({email:oldUser.email, id:oldUser._id},secret,{expiresIn:'1000d'});
      res.status(200).json({email:oldUser,token})
    } catch (error) {
console.log(error);  
       return res.status(500).json({message:'Signin error try again'})
        
    }
}


export const  forgotPassword= async(req,res)=>{
const {email}=req.body

try {
    const oldUser= await userModel.findOne({email});
if(!oldUser){
    return res.status(400).json({message:'user with that email does not exist'})
}
const sec= secret + oldUser.password;
const token =jwt.sign({email:oldUser.email,id:oldUser._id},sec,{expiresIn:'100m'})  
const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
// console.log(link);
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "petergachau57@gmail.com",
      pass: "kvoqqhjcvsmgupko",
    //   kvoqqhjcvsmgupko
    },
  });

  var mailOptions = {
    from: "petergachau57@gmail.com",
    to: email,
    subject: "Password Reset",
    text: link,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  console.log(link);

} catch (error) {
    
}


}


export const  resetPassword = async(req,res)=>{
  const {id,token}=req.params
  console.log(req.params); 
  const oldUser= await userModel.findOne({_id:id});
  if(!oldUser){
    return res.status(400).json({message:'user with that email does not exist'})
}
const sec= secret + oldUser.password;

try {
    const  verify=jwt.verify(token,sec)
res.render("index",{email:verify.email,status: " not Verified"})


} catch (error) {
    console.log(error);
    return res.status(400).json({message:'not verified'})

}


}

export const  changePassword = async(req,res)=>{
    const {id,token}=req.params
    const {password}=req.body
    const oldUser= await userModel.findOne({_id:id});
    if(!oldUser){
      return res.status(400).json({message:'user with that email does not exist'})
  }
  const sec= secret + oldUser.password;
  
  try {
      const  verify=jwt.verify(token,sec)
const encryptedPassword = await bcrypt.hash(password, 10);

await userModel.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        password: encryptedPassword,
      },
    }
  ); 
   res.render("index",{email:verify.email,status: "Verified"})

//   return res.status(400).json({message:'password updated'})

  } catch (error) {
      console.log(error);
  
  }
  
  
  }
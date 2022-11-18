import  bcrypt from 'bcryptjs'
import jwt  from 'jsonwebtoken'
import userModel from '../models/user.js'

const secret="secret"
export const signup= async(req,res)=>{
    const {email,password,firstName,lastName}=req.body;

    try {
        const oldUser=await userModel.findOne({email});
        if(oldUser){
            return res.status(400).json({message:'user already exist'})
        }

const hashedPassword = await bcrypt.hash(password,12);
const result= await userModel.create({
    email,
    password:hashedPassword,
    name:`${firstName} ${lastName}`
});
const token =jwt.sign({email:result.email,id:result._id,name:result.name },secret,{expiresIn:'1000d'})
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
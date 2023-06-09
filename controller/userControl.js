import User from '../Model/userModel.js'
import asyncHandler from 'express-async-handler'

const registerUser = asyncHandler(async(req,res)=>{
  const temp1= await User.create({
    username:"user",
    name:"user",
    email:"saini@gamil.com"
    

    });
   await temp1.save();
  const temp= await User.find({});
console.log(temp);

});


    export {registerUser};
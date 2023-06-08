import User from '../Model/userModel.js'
import asyncHandler from 'express-async-handler'

const registerUser = asyncHandler(async (req, res) => {
       const temp= new User({

        username:req.body.username,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        Credentialkey:req.body.Credentialkey,


    });
    console.log(temp);
    const user = await temp.save();
    if(user){
        res.status(201).json({
            _id:user._id,
            username:user.username,
            name:user.name,
            email:user.email,
            Credentialkey:user.Credentialkey,
            token:null,
        })
    }
});

    export {registerUser};
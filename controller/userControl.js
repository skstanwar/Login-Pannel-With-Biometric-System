import User from '../Model/userModel.js'
import asyncHandler from 'express-async-handler'


//-------------Register User --------------------------------------------//
const registerUser = asyncHandler(async(req, res)=>{
//    const {username , credential}= req.body;

//    const user = new User({

//     username,
//     credential

//    })
//    const userSave = await user.save();
//    console.log.log(userSave);
const s={
    key: 'Auth'
}
if(req.body.registration.credential.id){
    req.session.IsAuth=true;
    res.json(s);
}
else{
    req.session.IsAuth=false;
    res.status(400).send("You are not Auth!");
}


})

//-------------login --------------------------------------------//
const loginUser = asyncHandler( async(req, res)=>{
    try{
     const {username ,password}= req.body;
     const Check = await User.findone({
        username,
        password

    });
    if(Check){
        res.send("You Are Logged IN");
    }
    else{
        res.send("You Are not a user , Please register first");
    }}
    catch(error){
    res.send(error);
    
    }

}
);
export {registerUser , loginUser};
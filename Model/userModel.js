import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username:{type:String ,default:"user"},
    name:{type:String ,default:"user"},
    email:{type:String,unique:true},
    password:{type:String},
    Credentialkey:{type:String},
    
}
,
{timestamps:true}
);
console.log("userSchema is working");
const User = mongoose.model('User',userSchema);
export default User;

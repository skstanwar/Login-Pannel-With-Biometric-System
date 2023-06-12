import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username:{type:String},
    name:{type:String },
    email:{type:String},
    password:{type:String},
  
}
,
{timestamps:true}
);
console.log("userSchema is working");
const User = mongoose.model('User',userSchema);
export default User;

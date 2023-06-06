import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    Credentialkey:{type:String,required:true},
    
}
,
{timestamps:true}
);
const user = mongoose.model('user',userSchema);
export default user;

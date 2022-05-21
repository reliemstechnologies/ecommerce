import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    profileId:{
        type : String,
        required : false,
        trim : true
    },
    mobileNumber:{
        type:String,
        required : true,
        trim : true,
    },
    firstName:{
        type : String,
    },
    lastName : {
        type : String,
    },
    age : {
        type : Number,
    },
    gender : {
        type: String
    },
    email : {
        type : String,
    },
    address :{
        type : Object
    },
    password:{
        type : String
    }
},
{
    timestamps : true  
},
{
     versionKey: false 

})




userSchema.methods = {
    authenticate :  async function (password) {
        return await bcrypt.compare(password, this.password);
    },
};

const users = mongoose.model('user', userSchema);

export default users;
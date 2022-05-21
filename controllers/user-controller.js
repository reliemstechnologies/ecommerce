import User from '../model/userSchema.js';
import bcrypt from 'bcrypt';
import  shortid from 'shortid';
import jwt from 'jsonwebtoken';

const generateJwtToken  = (_id) => {
    return jwt.sign({ _id  }, process.env.JWT_SECRET, {
        expiresIn : "1d",
    });
};



export const signUp = async (req,res) =>{
    try {
        console.log(" ------------------  request body in sign up ---------------");
        console.log(req.body.mobileNumber);
        const exist = await User.findOne({ mobileNumber : req.body.mobileNumber });
        if(exist){
            res.status(401).json({ message : 'User already exist' });
        }
        const { mobileNumber, password, firstName, lastName , age, gender, email, address } = req.body;
        const haspassword = await bcrypt.hash(password,10);
        const newUser = new User({
            mobileNumber : mobileNumber,
            password: haspassword,
            profileId : shortid.generate(),
            firstName,
            lastName,
            age,
            gender,
            email,
            address,

        });
         newUser.save((error,user)=>{
             if(error){
                 return res.status(400).json({ message : "Something went wrong " })
             }
             if(user){
                 const token = generateJwtToken(user._id);
                 const { _id, mobileNumber, profileId } = user
                res.status(201).json({
                     token,
                     user:{ _id , mobileNumber, profileId }
                 })
             }
         });
        

    } catch (error) {
        return res.status(400).json({ message : "Something went wrong " })
    }
}



export const userLogin = async (req,res)=>{
    try {
        console.log("------------ request login body  --------")
        console.log(req.body)
        let user = await User.findOne({ mobileNumber : req.body.mobileNumber  });
        if(user){
            const isPassword = await user.authenticate(req.body.password);
            if(isPassword){
                const token = generateJwtToken(user._id);
                var { _id, firstName, lastName, email, profileId } = user;
                // _id = "Sushil";
                res.status(200).json({ token , user : {  _id,  profileId,  firstName, lastName, email } })
            }else{
                res.status(400).json({message : "Something went wrong" })
            }
            
            
        }else{
            res.status(400).json({message : "Something went wrong" })
        }

    } catch (error) {
        res.json(error.message);       
    }
}
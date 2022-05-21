import mongoose from 'mongoose';

const Connection = async (username,password) =>{
    const URL = `mongodb://localhost:27017/kshivo`
    try{
        await mongoose.connect(URL,{useUnifiedTopology : true, useNewUrlParser:true});
        console.log('Database Connected Successfully');
    }catch(error){
        console.log('Error :', error.message);
    }
};


export default Connection;
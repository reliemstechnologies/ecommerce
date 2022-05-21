import mongoose from "mongoose";
const bannerSchema = new mongoose.Schema({
    bannerName : {
        type:String
    },
    bannerUrl:{
        type:String,
        required : true
    },
    bannerNo:{
        type:Number
    }
},{
    timestamps : true
},{
    versionKey : false
});



const banner = mongoose.model('banners',bannerSchema);

export default banner;
import mongoose from "mongoose";


const categorySchema = mongoose.Schema({
    categoryName : {
        type : String,

    },
    categoryImageUrl : {
        type :String
    },
    categoryNo : {
        type : Number
    }
},{
    timestamps : true
},{
    versionKey : false
}
);



const categories = mongoose.model('categories',categorySchema);

export default categories;
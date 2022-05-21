import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    id: {
      type: String,
      required : true,
      trim : true,
    }, 
    url:{
        type: String,
        required : true,
        trim : true,  
    }, 
    detailUrl:{
        type: String,
        required : true,
        trim : true,
    },
    title: {
        type: String,
        required : true,
        trim : true,
    },
    price: {
        type: String,
        required : true,
        trim : true,
    },
    quantity: {
        type: Number,
        required : true,
        trim : true,
    },
    description: {
        type: String,
    },
    discount: String,
    tagline: String
},
{
    timestamps : true  
},
{ versionKey: false }
);



const products = mongoose.model('product', productSchema);

export default products;
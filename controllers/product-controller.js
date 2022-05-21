
import Product from '../model/productSchema.js';
import Banner from '../model/bannerSchema.js';

export const addProduct = async (req,res) =>{
    try{

     console.log("------------------ request --------------------");
    //  console.log(req)   
    // id = req.body.id,
    // url = req.body.ul,
    // detailURL = req.body.detailURL,
    // title = req.body.title,
    // price = req.body.price,
    // quantity =  req.body.quantity,
    // description = req.body.description,
    // cuttedPrice = req.body.cuttedPrice,
    // discount = req.body.discount,
    // tagline =  req.body.tagline
    
    const newProduct = new Product(req.body);

     await newProduct.save();
    res.status(200).json({ message : "Product Created Successfully..." })    


    }catch(error){
      res.json({ message : error.message })
    }
}


export const getProducts = async(req,res) =>{
    try{
        console.log("---- getproduct called ----");
        const productList = await Product.find({});
        res.json(productList);

    }catch(error){
        res.json({message : error.message })
    }
}

export const getProductById = async ( req,res)=>{
    const product = await Product.findById({ '_id' : req.params.id });
    console.log("---------- get product by id -----------");
    console.log(req.params.id)
    if(!product){
        res.json({ message: 'no product found by id' });
    }
    res.json(product);
}

export const addBanner = async (req,res) =>{
    try{

     console.log("------------------ request --------------------");
    const newBanner = new Banner(req.body);

     await newBanner.save();
    res.status(200).json({ message : "Banner Created Successfully..." })    


    }catch(error){
      res.json({ message : error.message })
    }
}



export const getBanners = async(req,res) =>{
    try{
        console.log("---- ----");
        const bannerList = await Banner.find({});
        res.json(bannerList);

    }catch(error){
        res.json({message : error.message })
    }
}

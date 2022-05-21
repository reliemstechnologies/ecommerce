import Category from '../model/categorySchema.js';


export const addCategory = async (req,res) =>{
    try{

     
    // tagline =  req.body.tagline
    
    const newCategory = new Category(req.body);

     await newCategory.save();
    res.status(200).json({ message : "Category Created Successfully..." })    


    }catch(error){
      res.json({ message : error.message })
    }
}


export const getCategories = async(req,res) =>{
    try{
        console.log("---- ----");
        const categoryList = await Category.find({});
        res.json(categoryList);

    }catch(error){
        res.json({message : error.message })
    }
}


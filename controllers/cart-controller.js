import CartModel from "../model/cartSchema.js"

export const addToCart = async (req,res) =>{
        try{
          console.log(req.body.user)
        const cartData = await CartModel.findOne({ user : req.body.user });
        console.log(cartData);
        if(cartData && cartData.length !== 0){
            // cart is exist already so update quantity
            let promiseArray = [];
             req.body.cartItems.forEach( async (cartItem)=>{
                const product = cartItem.product;
               const item = cartData.cartItems.find((c) => c.product == product);
                // console.log(cartItem);
                let condition,update;
                if (item) {
                    condition = { user: req.body.user, "cartItems.product": product };
                    update = {
                      $set: {
                        "cartItems.$": cartItem,
                      },
                    };
                  } else {
                    condition = { user: req.body.user };
                    update = {
                      $push: {
                        cartItems: cartItem,
                      },
                    };
                  }
                 const updateRecord =   await CartModel.findOneAndUpdate(condition, update, {  upsert: true , returnOriginal: false})
                 console.log(updateRecord); 
                 promiseArray.push(updateRecord);
                 res.status(201).json(promiseArray); 
                
            });
          
        }else{
            // if cart not exist create new cart
            
            const cart = new CartModel({
                user: req.body.user,
                cartItems: req.body.cartItems,
            });
            console.log(cart)
            cart.save((error,cart)=>{
                if(error) return res.status(400).json({ error });
                if(cart){
                    return res.status(200).json({ cart })
                }
            })
        }

    }catch(error){
      res.json({ message : error.message })
    }
}



export const getCartItems = async (req,res) =>{
    try {
            const cart = await CartModel.findOne({ user : req.body.user }).populate('cartItems.product', '_id title price url detailUrl description');
            console.log(cart.cartItems);
            if(cart){
                let cartItems  = {};
                cart.cartItems.forEach((item,index) => {
                    cartItems[item.product._id.toString()] = {
                      _id: item.product._id.toString(),
                      title: item.product.title,
                      url: item.product.url,
                      price: item.product.price,
                      qty: item.quantity,
                    }
                });
                res.status(200).json({ cartItems })
            }


    } catch (error) {
         res.json({ message : error.message })
    }
}


export const removeCartItems = async(req,res) => {
  
try {

    const { productId } = req.body.payload;
    if(productId){
      const removedItem = await CartModel.updateOne(
        { user : req.body.user },
        {
          $pull:{
            cartItems:{
              product : productId,
            }
          }
        }
      )

      if(removeCartItems){
        res.status(202).json({ removedItem });
      }
    }

} catch (error) {
  res.json({ message : error.message })
}

}
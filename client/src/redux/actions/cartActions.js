import React from 'react';


export const addToCart = (product, newQty=1) => async(dispatch) => {
    const { 
        cart : { cartItems },
        getLoginUser : getLoginUser
     } = store.getState;
}   
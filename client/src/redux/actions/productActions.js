import axios from "axios";
import * as actionTypes from '../constants/productConstants'

export const getProducts = () => async(dispatch) =>{
    try {
        const {data} = await axios.get('http://localhost:5000/get/product');
        // console.log("------------- data ----------");
        // console.log(data);
        dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS, payload : data })

    } catch (error) {   
        dispatch({type:actionTypes.GET_PRODUCTS_FAIL, payload : error.response});
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        // console.log("-------------- id -----------------");
        console.log(id);
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

        const { data } = await axios.get(`http://localhost:5000/get/product/${id}`);
        console.log(data);

        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response});

    }
};
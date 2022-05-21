import axios from "axios";
import * as actionTypes from '../constants/productConstants'

export const getCategories = () => async(dispatch) =>{
    try {
    
        const {data} = await axios.get('http://localhost:5000/get/category');
        // console.log("------------- CATEGORY ----------");
        console.log(data);
        dispatch({type:actionTypes.GET_CATEGORY_SUCCESS, payload : data })

    } catch (error) {   
        dispatch({type:actionTypes.GET_CATEGORY_FAIL, payload : error.response});
    }
}

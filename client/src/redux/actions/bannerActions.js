import axios from "axios";
import * as actionTypes from '../constants/productConstants'

export const getBanners = () => async(dispatch) =>{
    try {
        // console.log("------------------ inside getbanners ------------------");
        const {data} = await axios.get('http://localhost:5000/get/banners');
        // console.log("------------- banners ----------");
        console.log(data);
        dispatch({type:actionTypes.GET_BANNER_SUCCESS, payload : data })

    } catch (error) {   
        dispatch({type:actionTypes.GET_BANNER_FAIL, payload : error.response});
    }
}

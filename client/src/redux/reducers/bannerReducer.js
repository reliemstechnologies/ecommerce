import * as actionTypes from '../constants/productConstants'

export const getBannerReducer = (state={banners:[]},action) =>{
    switch(action.type){
        case actionTypes.GET_BANNER_SUCCESS : 
            return {banners : action.payload}
        case actionTypes.GET_BANNER_FAIL :
            return {error : action.payload}
        default : 
            return state
    }
};


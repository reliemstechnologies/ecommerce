import * as actionTypes from '../constants/productConstants'

export const getCategoryReducer = (state={categories:[]},action) =>{
    switch(action.type){
        case actionTypes.GET_CATEGORY_SUCCESS : 
            return {categories : action.payload}
        case actionTypes.GET_CATEGORY_FAIL :
            return {error : action.payload}
        default : 
            return state
    }
};


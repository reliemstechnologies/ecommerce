import * as actionTypes from '../constants/userConstants'

const initState=
{
    token : null,
    user : {
        mobileNumber : "",
        profileId : "",
        _id : "",
        email : "",
    },
    authenticate : false
    
};


export const getLoginReducer = (state=initState,action) =>{
    switch(action.type){
        case actionTypes.GET_USER_LOGIN_SUCCESS : 
            // console.log("inside success reducer GET User Login SUccess");
            state = {
                ...state,
                token : action.payload.token,
                user : action.payload.user,
                authenticate : true, 
            }
            break;
        case actionTypes.GET_USER_LOGIN_FAIL :
            // console.log("inside user login fail");
            state =  {
                ...state,
                error : action.payload,
                authenticate : false
            };
          break;        

    }
    
    return state
};


export const getSignUpReducer = (state = initState , action ) => {
    switch(action.type){
        case actionTypes.GET_USER_SIGNUP_REQUEST : 
        state ={
            ...state,
            authenticate : false
        }
            break;
        case actionTypes.GET_USER_SIGNUP_SUCCESS : 
        state = {
            ...state,
            token:action.payload.token,
            user : action.payload.user,
            authenticate : true, 
        }
        break;
        case actionTypes.GET_USER_SIGNUP_FAIL :
            state =  {
                ...state,
                error : action.payload,
                authenticate : false
            };
          break;       

    }   
    return state;
}


export const signOutReducer = (state = initState, action ) => {
    switch(action.type){
        case actionTypes.GET_USER_LOGOUT_REQUEST : 
                state = {
                    ...state,
                    loading: true,
                }
        
            break;
        case actionTypes.GET_USER_LOGOUT_SUCCESS : 
            state = {
                ...initState
            }
            break;
        case actionTypes.GET_USER_LOGOUT_FAIL :
            state = {
                ...state,
                error : action.payload.error,
                loading : false,
            }

    }
    return state;
}
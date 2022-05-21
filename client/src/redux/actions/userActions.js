import axios from "axios";
import * as actionTypes from '../constants/userConstants'

export const userLogin = (user) => async(dispatch) =>{
    // console.log("------------- user Login  ----------");
    console.log(user);
    try {
        const res = await axios.post('http://localhost:5000/user/login',{
            ...user
        });
        
        // console.log("------------- login data  ----------");
        // console.log(res);
        if(res.status === 200){

            console.log("---------------- Login success ----------------- ");
            console.log(res);
            const { token, user} = res.data;
            const newUser = JSON.stringify({
                "_id" : user._id,
                "profileId" : user.profileId,
            })
            
            // console.log(token);
            // console.log(user);
            localStorage.setItem("token",token);
            localStorage.setItem("user",newUser);
            const newPayload = {
                "token" : token,
                "user" : {
                    "_id" : user._id,
                    "profileId" : user.profileId,
                },
            }
            console.log("------ new payload ----");
            console.log(newPayload);   
            dispatch({type:actionTypes.GET_USER_LOGIN_SUCCESS, payload : newPayload })

        }else{
            const { error } = res
            dispatch({type:actionTypes.GET_USER_LOGIN_FAIL, payload : error.response});
        }

    } catch (error) {   
        dispatch({type:actionTypes.GET_USER_LOGIN_FAIL, payload : error.response});
    }
}


export const userSignUp = (user) => async(dispatch) => {
    try {
        console.log(user);
        dispatch({ type : actionTypes.GET_USER_SIGNUP_REQUEST });
       const res = await axios.post(`http://localhost:5000/user/signup`,{
            ...user
        });
        // console.log("------------------------- user is -----------------------");
        // console.log(user);
        // console.log("------------------")
        if(res.status === 201){
            // console.log("------ inside user signup success ----------");
            console.log(res.data)
            console.log("------ inside user signup success ----------");
            const { token, user } = res.data;
            console.log(token)
            console.log(user);
            localStorage.setItem("token",token);
            localStorage.setItem("user",user);
            dispatch({ type : actionTypes.GET_USER_SIGNUP_SUCCESS,  payload : res.data })

        }else{
            // console.log("------ inside user signup failure ----------");
            const { error } = res.data;
            dispatch({ type : actionTypes.GET_USER_SIGNUP_FAIL, payload : error });

        }
        

    } catch (error) {
        
        const data = error.response;
        dispatch({ 
            type: actionTypes.GET_USER_SIGNUP_FAIL,
            payload : { error : data.error }
        })
    }
}

// isuserloggedin


export const isUserLoggedin = () =>async(dispatch) =>{
    // console.log("---- in isuserloggedin ------")
    const token = localStorage.getItem("token");
    const user =  JSON.parse(localStorage.getItem("user"));
    // console.log("-------- token is -----------------"+token);
    // console.log(user)
    // console.log(user.profileId)
    if(token && user){
       
        dispatch({
            type:actionTypes.GET_USER_LOGIN_SUCCESS
        , payload : {token, user } })
    }else{
        dispatch({
            type : actionTypes.GET_USER_LOGIN_FAIL,
            payload : { error : "Failed to load login" }
        });
    }
}



export const signOut = () => async(dispatch) => {
    dispatch({ type : actionTypes.GET_USER_LOGOUT_REQUEST });
    localStorage.clear();
    dispatch({ type : actionTypes.GET_USER_LOGOUT_SUCCESS });

}


import axios from 'axios';

const url = 'http://localhost:5000';

export const authenticateLogin = async (user) => {
    try {
        console.log(" ------------- user is  ------------------")
        console.log(user);
        console.log(`${url}/user/login`)
        console.log("------------------------------------")
        return await axios.get(`${url}/user/login`, user)
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/user/signup`, user)
    } catch (error) {
        console.log('error while calling Signup API: ', error);
    }
}

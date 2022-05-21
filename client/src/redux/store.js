import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getProductReducer, getProductDetailsReducer } from "./reducers/productReducer";
import {getBannerReducer} from './reducers/bannerReducer.js'
import { getCategoryReducer } from "./reducers/categoryReducer";
import { getLoginReducer, getSignUpReducer , signOutReducer} from './reducers/userReducer';

console.log(" -----------------------  getLoginReducer -----------");
console.log(getLoginReducer)

const reducer = combineReducers({
    getProducts : getProductReducer,
    getBanners : getBannerReducer,
    getCategories : getCategoryReducer,
    getProductDetails: getProductDetailsReducer,
    getLoginUser : getLoginReducer,
    getSignUpUser : getSignUpReducer,
    signOut : signOutReducer,
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store
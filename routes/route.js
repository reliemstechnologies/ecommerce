import express from 'express'
import {addProduct, getProducts, addBanner, getBanners, getProductById} from '../controllers/product-controller.js'
import { addCategory, getCategories } from '../controllers/category-controller.js';
import { signUp, userLogin } from '../controllers/user-controller.js'
import {  isRequesteValidated }   from '../validator/auth.js';
import  { requireSignIn } from '../common-middleware/auth.js';
import { addToCart, getCartItems, removeCartItems } from '../controllers/cart-controller.js';



const router = express.Router();

router.post('/add/product', addProduct)
router.get('/get/product', getProducts)
router.post('/add/banner', addBanner)
router.get('/get/banners', getBanners)
router.post('/add/category',addCategory);
router.get('/get/category', getCategories)
router.get('/get/product/:id', getProductById);
router.post('/user/signup', isRequesteValidated, signUp);
router.post('/user/login', isRequesteValidated, userLogin);
router.post('/cart/addtocart',  addToCart );
router.get('/cart/getcartitems', getCartItems)
router.post('/cart/removecartitem', removeCartItems)

export default router
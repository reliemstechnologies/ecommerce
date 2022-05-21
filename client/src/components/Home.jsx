import React,{useEffect} from 'react'
import NavBar from './Home/NavBar'
import Banner from './Home/Banner'
import MidSlide from './Home/MidSlide';
import MidSection from './Home/MidSection';
import Slide from './Home/Slide'
import { Box , makeStyles} from '@material-ui/core'
import { dealData } from '../constants/data';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts  } from '../redux/actions/productActions';
import { getBanners as listBanners } from '../redux/actions/bannerActions.js'
import {getCategories as listCategories} from '../redux/actions/categoryActions.js'


const useStyles = makeStyles({
  container :{
    padding: 10,
    background: '#F2F2F2'
  }
})

const Home = () => {
  const classes = useStyles();

const getProducts = useSelector(state => state.getProducts);

const getBanners = useSelector(state=> state.getBanners);

const getCategories = useSelector(state=> state.getCategories);

const {products, error} = getProducts;
const  { banners , errors } = getBanners;

const {categories} = getCategories;

const dispatch = useDispatch();
// console.log("------ dispatch product data -------------")
// console.log(products)

useEffect(()=>{
  dispatch(listBanners())
  dispatch(listCategories())
  dispatch(listProducts())
},[dispatch])

  return (
    <div>
        <NavBar navData={categories} />
        <Box className={classes.container}>
          <Banner bannerData={banners} />
          <MidSlide products={products} />
          <MidSection />
          <Slide 
            data={products}
            title="Suggested items"
            timer={true}
            multi={true}
          />
          <Slide 
            data={products}
            title="Best of items"
            timer={true}
            multi={true}
          />
          <Slide 
            data={products}
            title="Trending items"
            timer={true}
            multi={true}
          />
        </Box>
    </div>
  )
}

export default Home
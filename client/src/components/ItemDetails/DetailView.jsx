import React, { useEffect } from 'react'
import { Box, Grid,makeStyles, Typography } from '@material-ui/core'
import ActionItem from './ActionItem'
// import { useParams } from 'react-router-dom';
import clsx from 'clsx'
import ProductDetail from './ProductDetail';
import { getProductDetails  } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux';



const useStyles = makeStyles(theme => ({
    component : {
        marginTop : 55,
        background: '#F2F2F2'
    },
    container : {
        background : '#FFFFFF',
        display:'flex',
        [theme.breakpoints.down('md')]:{
            margin : 0,
        }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    price: {
        fontSize: 28
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: '#878787'
    }
}))

const DetailView = ({ history,match }) => {


    const classes = useStyles();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  
    
    const productDetails = useSelector(state => state.getProductDetails);
    const { loading, product } = productDetails;
    console.log("---------- details view ----------")
    console.log(productDetails);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(product && (match.params.id !== product._id))
            dispatch(getProductDetails(match.params.id));
    },[dispatch,product,loading]);
  
    return (
   !loading &&  <Box className={classes.component}>
        <Grid container className={classes.container}>
            <Grid item lg={4} sm={8} xs={12}>
                <ActionItem product={product} />
            </Grid>
            <Grid item lg={8} md={8} xs={12} className={classes.rightContainer}>
                <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{marginTop: 5}}>{product.title}</Typography>
                <Typography>8 Ratings 1 Review
                <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                </Typography>
                <Typography>
                            <span className={classes.price}>₹{product.price}</span>&nbsp;&nbsp;&nbsp; 
                            <span className={classes.greyTextColor}><strike>₹{product.price}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{color: '#388E3C'}}>{product.discount}</span>
                </Typography>
                <ProductDetail product={product}  />
            </Grid>
        </Grid>
    </Box>
  )
}

export default DetailView
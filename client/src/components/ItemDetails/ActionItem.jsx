import { makeStyles , Box , Grid, Button} from '@material-ui/core'
import clsx from 'clsx';
import React from 'react'
// import {Flash} from '@material-ui/icons'

// const product = {
//     detailURL : 'https://rukminim1.flixcart.com/image/416/416/ku04o7k0/rack-shelf/c/n/g/living-room-bedroom-a-103-divine-dekor-original-imag77wuhctnhdgz.jpeg?q=70'

// }

const useStyles = makeStyles(theme=>({
        leftContainer : {
            minWidth : '40%',
            padding : '40px 0 0 80px',
            [theme.breakpoints.down('md')]:{
                padding : '20px 40px'
            }
        },
        productImage : {
            padding : '15px 20px',
            border : '1px solid #f0f0f0',
            width : '95%'
        },
        button:{
            width:'46%',
            borderRadius : 2,
            height : 50
        },
        addToCart : {
            background : '#ff9f00',
            color : '#FFF'
        },
        buyNow : {
            background : '#fb641b',
            color : '#fff'
        }

}));

const ActionItem = ({ product }) => {
    const classes = useStyles();
  return (
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} className={classes.productImage} /><br />
            <Button className={clsx(classes.button, classes.addToCart) } style={{ marginRight:10 }}  variant="contained"> Add To Cart</Button>
            <Button className={clsx(classes.button,classes.buyNow)} variant="contained"> Buy Now</Button>
        </Box>

  )
}

export default ActionItem
import { Grid, Typography, Box , makeStyles, Button} from '@material-ui/core'
import React from 'react'
import CartItem from './CartItem';
import TotalView from './TotalView';


const useStyles = makeStyles(theme => ({
    component : {
        padding:'30px 135px',
        display : 'flex',
        [theme.breakpoints.down('sm')]:{
            padding : '15px 0'
        }
    },
    
    leftComponent:{ 
        paddingRight : 15,
        [theme.breakpoints.down('sm')]:{
            marginBottom : 15,
        }
    },
    header:{
        padding : '15px 24px',
        background : '#fff'
    },
    bottom:{
        padding: '16px 22px',
        background: '#fff',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
        borderTop: '1px solid #f0f0f0'
    },
    placeOrder: {
        display: 'flex',
        marginLeft: 'auto',
        background: '#fb641b',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        height: 51
    }
}))

const Cart = () => {
    const classes = useStyles();

  return (
    <>
        <Grid container className={classes.component}>
            <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent}>
                <Box className={classes.header}>
                    <Typography style={{ fontWeight : 600 , fontSize : 18  }}>My Cart (2)</Typography>
                </Box>
                <CartItem />
                <Box className={classes.bottom}>
                    <Button variant="contained" className={classes.placeOrder}>Place Order</Button>
                </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TotalView />
            </Grid>
        </Grid>
    </>
  )
}

export default Cart
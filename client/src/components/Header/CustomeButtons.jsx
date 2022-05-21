import React, { useState, useContext, useEffect } from 'react';
import { makeStyles, Box, Typography, Badge, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';
import LoginDialog from '../Login/LoginDialog';
import { LoginContext } from '../../context/ContextProvider';
import { useSelector } from 'react-redux';
import Profile from './Profile';


const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    wrapper: {
        margin: '0 5% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                color: '#2874f0',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 10
            }      
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }   
    },
    login: {
        color: '#2874f0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            background: '#2874f0',
            color: '#FFFFFF'
        }   
    }
}));


const CustomButtons = () => {
    const classes = useStyle();
    const [ open, setOpen ] = useState(false);
    const [ account, setAccount ] = useState("");

    var getLoginUser = useSelector((state)=> state.getLoginUser);
    var getSignUpUser = useSelector((state)=> state.getSignUpUser)
    console.log(" -------------- get Login User -------------------------")
    console.log(getSignUpUser);
    console.log(" -------------- Login -------------------------")
  
    // const cartDetails = useSelector(state => state.cart);
    // const { cartItems } = cartDetails;
    if(getLoginUser === undefined)
    {
        getLoginUser = {
            authenticate : false
        }
        
    }

    if(getSignUpUser === undefined){
        getSignUpUser = {
            authenticate : false
        }
    }
    useEffect(()=>{
     
        if(getLoginUser.authenticate){
            console.log("----- inside the setopen ");
            setOpen(false);
            setAccount(getLoginUser.user.profileId);
        }
    },[getLoginUser.authenticate])


    useEffect(()=>{
        if(getSignUpUser.authenticate){
            setOpen(false);
            console.log("------------- profile id printing -------")
            console.log(getSignUpUser.user.profileId)
            setAccount(getSignUpUser.user.profileId);
        }
    },[getSignUpUser.authenticate])


    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Box className={classes.wrapper}>
            {
               getLoginUser.authenticate  ? <Profile account={account} setAccount={setAccount} /> : 
                <Link>
                    <Button className={classes.login} variant="contained" onClick={() => openDialog() }>Login</Button>
                </Link>
            }
            <Link>
                <Typography style={{ marginTop: 2 }}>More</Typography>
            </Link>
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={0} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Box>
    )
}

export default CustomButtons;
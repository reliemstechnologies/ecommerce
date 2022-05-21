import { makeStyles } from '@material-ui/core';
import './App.css';
import Header from './components/Header/Header'
import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import {BrowserRouter , Switch, Route } from "react-router-dom";
import  Home  from './components/Home'
import NotFound from './components/NotFound'
import Cart from './components/Cart/Cart'
import DetailView from './components/ItemDetails/DetailView';
import TemplateProvider from './Template/TemplateProvider'
import ContextProvider from './context/ContextProvider';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateLogin } from './services/api';
import { isUserLoggedin } from './redux/actions/userActions';





function App() {

  const dispatch = useDispatch();
 
 const getLoginUser = useSelector(state => state.getLoginUser);
  // console.log("------- get Login user -----")
  // console.log(getLoginUser)
  // console.log("------- get Login user -----")

useEffect(()=>{
  if(!getLoginUser.authenticate){
    // console.log("---- inside if getLogin user ----");
    dispatch(isUserLoggedin())
  }
},[getLoginUser.authenticate])

  return (
      <>
        <TemplateProvider>
        <ContextProvider>
          <BrowserRouter>
            <Box>
            <Header/>
            <Box style={{marginTop: 54}}>
              <Switch>
                <Route exact  path='/'   component={Home} />
                <Route exact path= '/get/product/:id'  component={DetailView} />
                <Route exact path ='/cart'  component={Cart} />
                <Route component={NotFound} />  
              </Switch>        
            </Box>
            </Box>
            </BrowserRouter>
            </ContextProvider>
         </TemplateProvider>
      </>    
  );
}

export default App;

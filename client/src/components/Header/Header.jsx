import { AppBar, Toolbar, Box , withStyles} from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';
import Search from './Search';
import CustomeButtons from './CustomeButtons';

const useStyles = makeStyles(theme =>({
  headers:{
    background: '#2874f0',
    height: 55
  },
  logo:{
    width: 75
  },
  component:{
    marginLeft : '12%'
  },
  CustomeButtons :{
    margin : '0 5% 0 auto',
    [theme.breakpoints.down('sm')]:{
      display : 'none'
    }
  }
}))

const ToolBar = withStyles({
  root: {
    minHeight: 55
  },
})(Toolbar);


const Header = () => {

  const classes = useStyles();
  const logoURL = "https://kshivo.com/public/front_end/images/Kshivo%20Logo.png";

  return (
    <div>
      <AppBar className={classes.headers}>
        <ToolBar>
            <Box className={classes.component}>
            <img src={logoURL} className={classes.logo} />
            </Box>
            <Search />
            <span className={classes.CustomeButtons}><CustomeButtons /></span>
        </ToolBar>
      </AppBar>
    </div>
  )
}

export default Header
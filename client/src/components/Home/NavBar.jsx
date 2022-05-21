import React from 'react'
import { Box, Typography } from '@material-ui/core'
// import { navData } from '../../constants/data'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    component :{
        display : 'flex',
        justifyContent : 'space-between',
        margin : '55px 130px 0  130px',
        overflowX : 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container :{
        padding : '12px 8px',
        textAlign : 'center'
    },
    text : {
        fontSize : 14,
        fontWeight : 600,
        fontFamily : 'inherit'
    }
}))

const NavBar = ({navData}) => {
    const classes = useStyles();
  return (
    <Box className={classes.component}>
        {
        navData.map(temp=>(
            <Box className={classes.container}>
                <Typography className={classes.text}>{temp.categoryName}</Typography>
            </Box>        
        ))
        
        }
    </Box>
  )
}

export default NavBar
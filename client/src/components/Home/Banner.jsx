import { makeStyles } from '@material-ui/core'
import React from 'react'
import { bannerData } from '../../constants/data'
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles(theme => ({
    container : {

    },
    image : {
        width : '100%',
        height : 280,
        [theme.breakpoints.down('sm')]:{
            objectFit : 'cover',
            height : 180
        }
        
    }
}))
const Banner = ({bannerData}) => {
    const classes = useStyles();

  return (
    <Carousel
    autoPlay={true} 
    animation="slide" 
    indicators={false}
    navButtonsAlwaysVisible={true}
    cycleNavigation={true}
    className={classes.container}
    navButtonsProps={{ 
        style: {
            color: '#494949',
            backgroundColor: '#FFFFFF',
            borderRadius: 0,
            margin: 0,
            width: 50,
        }
    }}StylesProvider
    
    >
            {
                bannerData.map(image =>(
                    <img src={image.bannerUrl} className={classes.image} />
                ))
            }
    </Carousel>
  )
}

export default Banner
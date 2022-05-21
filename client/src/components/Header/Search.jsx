import { makeStyles, InputBase, Badge } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search'



const useStyles = makeStyles({
  inputRoot :{
    fontSize: 'unset',
        width: '100%'
  },
  inputInput : {
    paddingLeft: 20,
    width: '100%'
  },
  searcht:{
    borderRadius: 2,
    marginLeft: 20,
    width: '38%',
    backgroundColor: '#fff',
    display: 'flex'
  },
  searchIcon:{
    marginLeft: 'auto',
    padding: 5,
    display: 'flex',
    color: 'blue'
  }

})

const Search = () => {
  const classes = useStyles();
  return (
    <div className={classes.searcht}> 
            <InputBase
              placeholder="Search for products, brands and more"
              className={
                {
                  root : classes.inputRoot,
                  input : classes.inputInput,
                }
              }
            />
            <div className={classes.searchIcon}>
             
              <SearchIcon  />
            </div>
           
    </div>
  )
}

export default Search
import React, {useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  BottomNavigation,
 BottomNavigationAction,
 ButtonGroup,
 Button,
} from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import ShareIcon from '@material-ui/icons/Share';

// const useStyles = makeStyles((theme) => {
//   return(
//     {
//       root: {
//         width: '100%',
//         position: "fixed",
//         bottom: theme.spacing(0)
//       },
//       share: {
//         backgroundColor: 'white',
//         position: 'fixed',
//         bottom: theme.spacing(0),
//         width: '100%',
//       }

//     }
//   )
// })
const useStyles = makeStyles(theme => {
  return({
    root: {
      position: 'fixed',
      width: '100%',
      bottom: theme.spacing(0)
    },
    share:{
      position: 'fixed',
      bottom: theme.spacing(0),
      backgroundColor: 'white',
      border: 'none'
    },
    button: {
      display: 'flex',
      paddingTop: 5,
      paddingBottom: 5,
      border: 'none',
      margin: theme.spacing(1),
      alignItems: 'flex-end',
      width: 70,
    }
  })
})

function Navbar(props) {
  const classes = useStyles()
  const location = useLocation()
  const paramsHooks = useParams()
  console.log("LOCATIONNNN", location)
  console.log("PROPS NAVBARRRRRRRRR", paramsHooks)
  const [value, setValue] = useState('News')
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if(location.pathname.includes('/article')) {
    return(
      <ButtonGroup size="small"  className={classes.share} fullWidth>
        <Button  color='secondary' aria-label="share" startIcon={<ShareIcon />} className={classes.button}>Share</Button>
        <Button   color='secondary' aria-label="save" startIcon={<TurnedInNotIcon />} className={classes.button}>Save</Button>
      </ButtonGroup>

    )
  }

  return(
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="News" href="/Home" icon={<HomeOutlinedIcon fontSize="large"/>} />
      <BottomNavigationAction label="Resources" href='/Resources' icon={<MenuBookOutlinedIcon fontSize="large"/>} />
      <BottomNavigationAction label="Saved" icon={<TurnedInNotIcon fontSize="large"/>} />  
    </BottomNavigation>
  )
}

export default Navbar

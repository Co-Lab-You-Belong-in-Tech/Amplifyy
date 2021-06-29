import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {
  BottomNavigation,
 BottomNavigationAction,
} from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';


function Navbar() {
  const classes = useStyles()
  const [value, setValue] = useState('News')
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return(
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="News" icon={<HomeOutlinedIcon fontSize="large"/>} />
      <BottomNavigationAction label="Resources" icon={<AnnouncementOutlinedIcon fontSize="large"/>} />
      <BottomNavigationAction label="Saved" icon={<TurnedInNotOutlinedIcon fontSize="large"/>} />  
    </BottomNavigation>
  )
}
const useStyles = makeStyles({
  root: {
    width: 300,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Navbar

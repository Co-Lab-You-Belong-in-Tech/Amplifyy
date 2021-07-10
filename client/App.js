import React, {useEffect, useState} from 'react'
import { Navbar } from './components'
import { useLocation } from 'react-router'
import { UserInterestProvider } from './contexts/userInterestContext'
import Routes from './Routes'


const App = () => {
  const location = useLocation()
  log("APP LOCATION", location)
  const navBarFreeLocations = {
    "/" : "/",
    "/Start" : "/Start"
  }

  return (

      <div className="App">
      <UserInterestProvider>
      <Routes />
      {!navBarFreeLocations[location.pathname]  &&
      <Navbar />
       }
      </UserInterestProvider>
    </div>
  )

}

export default App

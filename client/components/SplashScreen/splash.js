
import React, {useEffect, useState} from 'react'
import {useUserInterestContext} from '../../contexts/userInterestContext'
import { makeStyles, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => {

    return({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      height: '100vh',
      marginLeft: 16,
  
    },
    splash: {
        display: 'flex',
        flexFlow: 'column nowrap',
        textAlign: 'left',
        marginTop: 50,
        marginLeft: 16,
    },
    description: {
        marginTop: 100,
        fontWeight: 'bold'
    },
    bottom: {
        position: 'fixed',
        left: theme.spacing(18),
        bottom: theme.spacing(10)
    }
})
  })
function Splash(props) {
    const classes = useStyles()
    console.log(props)
    const [loading, setLoading] = useState(true)
    const {getUser} = useUserInterestContext()
    function handleClick() {
        props.history.push('/Start')
    }
    useEffect(() => {
        setTimeout(()  => {
            getUser().then(response => {
                if(response.interests.length > 0) {
                    props.history.push('/Home')
                } else {
                    setLoading(false)
                }
            })
        }, 2000)
    }, [])

    if(loading) {
    return (
        <div className={classes.root}>
            <img src='AMPLIFYY.png' />   
        </div>
    )
    } else {
        return (
            <div className={classes.splash}>
                <Typography variant="h4">Welcome to </Typography>
                <Typography variant="h4" style={{ fontWeight: 'bold' }} color='primary'> AMPLIFYY </Typography>
                <Typography variant="h6" className={classes.description}> Your leading platform to access all relevant resources to understand and support the AAPI Community</Typography>
                <div className={classes.bottom}>
                    <Button variant='contained' color='secondary' onClick={handleClick}>Let's go!</Button>
                </div>
            </div>
        )
    }
}

export default Splash

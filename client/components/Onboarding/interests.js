import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { interestsArr  } from './interestsArr'
import {Typography, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom'
import { useUserInterestContext } from '../../contexts/userInterestContext';
import Recap from './recap'


const useStyles = makeStyles({
    button: {
        margin: 4,
        marginTop: 10,
        color: '#35AAFF',
        borderColor: '#35AAFF'
    },
    pressed: {
        color: '#FDFFFC'
    },
    submit: {
        position: 'bottom',
        marginTop: '50%'
    },
    flex: {
        display: 'flex',
        height: '100vh',
        flexFlow: 'column',
        justifyContent: "center",
        alignContent: 'center',
        alignItems: 'center',
    },
    bold: {
        fontWeight: 'bold',
    },
    buttonContainer: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
    }
})
function Interests(props) {
    const classes = useStyles()
    const [selectedInterests, setSelectedInterests] = useState([])
    const {newSession} = useUserInterestContext()
    const [recap, setRecap] = useState(false)

    function handleUnclick(event) {
        console.log("You unclicked this button")
        let filtered = selectedInterests.filter((interest) => {
            if(interest !== event.currentTarget.name) {
                return interest
            }
        })
        setSelectedInterests(filtered)
    }

    function handleClick(event) {
        if(!selectedInterests.includes(event.currentTarget.name)) {
            let newArr = [...selectedInterests, event.currentTarget.name]
            setSelectedInterests(newArr)
        }
    }
    async function handleSubmit(event) {
        event.preventDefault()
        setRecap(true)
    }

       if(newSession && !recap) {
        return (
            <div className={classes.flex}>
            <Typography variant="subtitle1"> Step 1 of 2</Typography>
            <Typography variant="h6" className={classes.bold}> Choose your interests</Typography>
            <Typography variant="body1"> Your news feed will be curated based on the options that you select.</Typography>
            <Typography variant="body1"> You can change this at any time</Typography>
             <div className={classes.buttonContainer}>
            {interestsArr.map((interest, index) => {

                if(selectedInterests.includes(interest)) {
                    return(
                        <Button key={index} className={`${classes.button} + ${classes.pressed}`} onClick={(e) => handleUnclick(e)} name={interest} variant="contained" color="secondary" disableElevation>#{interest}</Button>
                    )
                } else {
                    return(
                <Button key={index} className={classes.button} onClick={(e) => handleClick(e)} name={interest} variant="outlined" >#{interest}</Button>
                )
                    }
            })}
            </div>
             <div>
            <Button className={classes.submit} onClick={handleSubmit} variant="contained" disableElevation>Continue</Button>
            </div>
            </div>
        )
       } else if(recap) {
          return <Recap selectedInterests={selectedInterests}/>
       } else {
           props.history.push('/Home')
       }

        
            
    }
  

export default Interests



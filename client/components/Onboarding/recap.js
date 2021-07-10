import React from 'react'
import {useHistory} from 'react-router-dom'
import { useUserInterestContext } from '../../contexts/userInterestContext';
import {Typography, Button, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    flex: {
        display: 'flex',
        height: '100vh',
        flexFlow: 'column',
        justifyContent: "center",
        alignContent: 'center',
        alignItems: 'center',
    },
    rows: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        flexFlow: 'row wrap'
    },
    interests: {
        backgroundColor: '#0A54FF',
        color: '#FDFFFC',
        borderRadius: 5,
        margin: 3,
        padding: 10,
        alignItems: 'center',
    }
})

function Recap(props) {
    const { createAccount } = useUserInterestContext()
    const history = useHistory()
    const {selectedInterests} = props
    const classes = useStyles()

    function handleSubmit(event) {
        event.preventDefault()
        createAccount(selectedInterests)
        history.push('/Home')


    }
    return (
        <div classes={classes.flex}>
            <Typography variant="subtitle1">Step 2 of 2</Typography>
            <Typography variant='h6'>Recap</Typography>
            <Typography variant="body1">Here's what you chose, enable location services to help you show local news.</Typography>
            <div className={classes.rows}>
        {selectedInterests.map((interest, index) => {
            return <Typography key={index} className={classes.interests}>#{interest}</Typography>
        })}
        </div>
        <Button variant="outlined" color="default" onClick={handleSubmit}>I'm in!</Button>
        </div>
    )
}

export default Recap

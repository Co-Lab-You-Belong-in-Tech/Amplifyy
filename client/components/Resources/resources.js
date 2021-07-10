import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Card, CardContent, Typography, Grid, CardActionArea} from '@material-ui/core'
import LaunchIcon from '@material-ui/icons/Launch';
import { makeStyles } from '@material-ui/core/styles';
import { Link} from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        marginTop: 16,
        marginBottom: "22%",
    },
    heading: {
        position: 'sticky',
        textAlign: 'left',
        margin: '10pt',
        fontWeight: 'bold'
    },
    row: {
        flexFlow: "row nowrap",
        overflow: 'auto',
    },
    card: {
        width: 150,
        height: 198,
        marginLeft: '10pt',
        fontSize: '18pt',
        lineHeight: 18,
        fontWeight: 'bolder',
        backgroundColor: "#0D99FF",
        color: "#FDFFFC",
        textAlign: 'left',
        justifyContent: 'center',
        alignItems: 'center'
        // margin: 'auto'
    },
    description: {
        fontSize: 11,
        maxHeight: '45pt',
        marginTop: '8pt',
        marginBottom: 0,
        whiteSpace: 'no-wrap',
        overflow: 'hidden',
        fontWeight: '400',
        textDecoration: 'none',
    },
    odd: {
        backgroundColor: "#FDFFFC",
        color: "#0D99FF",
        border: 'solid 1px #0D99FF'
    },


    btn: {
    //    display: 'block',
    //    float: 'right',
       fontSize: 15,
       margin: 0,
       marginLeft: 195,
       padding: 0,
       position: 'absolute',
       textAlign: 'right',
    }
})
async function fetchResources() {
    let {data} = await axios.get('/api/resources')
    data.sort((a, b) => {
        return a.category.id - b.category.id
    })
    return data
}

function Resources() {
    const [resources, setResources] = useState(null) 
    const [loading, setLoading] = useState(true)
    const classes = useStyles()

    useEffect(() => {
        let mounted = true
        fetchResources().then(response => {
            if(mounted) {
                setResources(response)
                setLoading(false)
            }
           
        }).catch(function(error){
         console.error(error);
        })
        return function cleanup() {
            mounted = false
        }
    }, [])
 
    
    if(!loading) {
        let curCategory = resources[0].category.name
        return(
            <div className={classes.root}>
             <Typography className={classes.heading} variant="h5" color="primary">Resources</Typography>
             <Typography  className={classes.heading} variant="subtitle2">A collection of resources regarding the AAPI Community to help support, take action, educate, donate, and more</Typography>
             {resources.map((resource, index) => {
               
                 if(index == 0 || resource.category.name !== curCategory) {
                     curCategory = resource.category.name
                     let counter = 0
                     return (
                         <>
                         <Typography key= {resource.category.id} className={classes.heading}variant='subtitle2'>{resource.category.name}</Typography>
                         <Grid container spacing={1} direction="column">
                             <Grid item xs={12}>
                                <Grid className={classes.row} container direction="row" spacing={0}>
                             {resources.map((item) => {
                                
                                 if(item.category.name === curCategory) {
                                     if(counter % 2 != 0) {
                                        ++counter
                                        return(
                                            <Grid key={item.id} item spacing={0} >
                                            <Card className={`${classes.card} ${classes.odd}`} elevation={0}>
                                               <CardContent >
                                                <Typography style={{fontWeight: 'bold'}} variant="subtitle2">
                                                {item.name}
                                                </Typography>
                                                <a href={`${item.url}`} rel="noreferrer">
                                                <CardActionArea>
                                                <Typography style={{color: '#0D99FF'}} className={classes.description}>{item.description}</Typography>
                                                   
                                                    <LaunchIcon  fontSize='inherit' style={{color: '#0D99FF', marginTop: 5, alignSelf: 'flex-end'}}/>
                                        
                                               </CardActionArea>
                                               </a>
                                            </CardContent>
                                            </Card>
                                            </Grid>
                                             )
                                    
                                     } else {
                                        ++counter
                                         return(
                                        <Grid key={item.id} item spacing={0}>
                                        <Card className={classes.card} elevation={0}>
                                           <CardContent >
                                            <Typography style={{fontWeight: 'bold'}}  variant="subtitle2">
                                            {item.name}
                                            </Typography>                                           
                                            <a href={`${item.url}`} rel="noreferrer">
                                                <CardActionArea>
                                                <Typography style={{color: 'white'}}className={classes.description}>{item.description}</Typography>
                                                
                                                <LaunchIcon  fontSize='inherit' style={{color: 'white', marginTop: 5}}/>
                                
                                               </CardActionArea>
                                               </a>
                                            </CardContent>
                                        </Card>
                                        </Grid>
                                         )
                                     }
                                     
                                 }
                             })}
                             </Grid>
                             </Grid>
                            </Grid>
                         </>
                     )
                 }
            })}
                        
            </div>
        )
    } else {    
        return (
        <div>
            <h1>I AM THE RESOURCES</h1>
        </div>
    )}

}

export default Resources

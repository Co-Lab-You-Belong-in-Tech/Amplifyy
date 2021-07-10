import React from 'react'
import {Typography, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles({
    back: {
        display: 'flex',
        flexFlow: 'row',
        marginLeft: 10,
    },
    source: {
        display: 'flex',
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 105,
        color: 'grey',
    },
    root: {
        textAlign: 'left',
        marginTop: 100,
        marginBottom: '20%',
        marginLeft: 16,
    },
    headline: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    description: {
        fontWeight: '500'
    },
    image: {
      height: 150,
      width: 330,
      marginRight: 14,
    }
})

function SingleArticle(props) {
    const classes = useStyles()
    const article = props.location.article.article
    const date = article.datePublished.slice(0, 10)
    return (
        <>
        <div className={classes.back}>
        
        <Button startIcon={<ArrowBackIosIcon/>} onClick={() => history.back()} value='Back'  color='secondary'/>  
        <Typography variant='body2' className={classes.source}>{article.provider.name}</Typography>
        </div>
        <div className={classes.root}>
        
       <Typography variant='h4' className={classes.headline}>{article.title}</Typography>
       <Typography variant='subtitle2'>{date}</Typography>
       <img src={article.image.url} className={classes.image}/>
       <article>
       <Typography variant="subtitle1" className={classes.description}>{article.description}</Typography>
       <Typography variant="body2">{article.body}</Typography>
       </article>
       </div>
       </>
        
    )
}

export default SingleArticle

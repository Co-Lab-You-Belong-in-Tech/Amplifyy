import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
// import {API_KEY, API_URI} from './secrets'
import {CircularProgress, Typography, CardMedia, CardContent, Card, CardActionArea} from '@material-ui/core'
import { useUserInterestContext } from '../../contexts/userInterestContext';

const useStyles = makeStyles({
    background: {
        marginBottom: '20%',
        marginTop: '10%',
    },
    loading: {
        height: '100vh',
        display: 'flex',
        flexFlow: 'column nowrap',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    root: {
      display: 'flex',
      textAlign: 'left',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      textAlign: 'left'
    },
    cover: {
      width: 151,
      marginRight: '2%',
      borderRadius: 5,
    },
    headlines: {
      textDecoration: 'none',
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 10,
    },
    img: {
      borderRadius: 5,
    }
})
const today = new Date();
const lastWeek = today.getDate() - 7;
const month = today.getMonth();
let params
const searchQuery = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
    params: {
      q: `AAPI, asian-american, ${params}` || 'AAPI, asian-american, mental health, technology, politics, arts, sports, business',
      pageNumber: '1',
      pageSize: '15',
      autoCorrect: 'true',
      withThumbnails: 'true',
      fromPublishedDate: `2021-${month}-${lastWeek}`,
      toPublishedDate: 'null',
    },
    headers: {
      'x-rapidapi-key': process.env.API_KEY,
      'x-rapidapi-host': process.env.API_URI,
    },
  };
function Feed() {
    const classes = useStyles();
    const {userInterests, getUser, newSession} = useUserInterestContext()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    async function getTopNews() {
        await axios
          .request(searchQuery)
          .then(response => {
            let data = response.data.value.sort((a,b) => {
                return new Date(b.datePublished) - new Date(a.datePublished)
            })
            setData(data)
          })
          .catch(function (error) {
            console.error(error);
          });
      }

    useEffect(() => {
      getUser().then(response => {
        params = response.interests.join(' ')
      }).finally(() => {
        getTopNews()
      })
        setTimeout(() => {
          setLoading(false)
        }, 5000);
      }, []);
      useEffect(() => {
 
      }, [userInterests, newSession])

    if(loading) {
        return(
            <div className={classes.loading}>
            <CircularProgress color="secondary"/>
            <Typography variant="h4">Please wait while we fetch your articles...</Typography>
            </div>
        )
    } else if(!newSession) {
        return(
            <div className={classes.background}>
                <Typography variant="h5" color="primary" style={{fontWeight: 'bold'}} className={classes.content}>Today's</Typography>
                <Typography variant="h5" color="primary" style={{fontWeight: 'bold'}} className={classes.content}>Top Stories</Typography>
                {/* <Typography variant="body2">{today.substring(0, 10)}</Typography> */}
                <Typography variant="body2" className={classes.content} style={{color:'grey'}}>Curated based on interests</Typography>
                {data.map((article, index) => {
                    let num = index + 1
                    if(index == 0) {
                       let date = article.datePublished.slice(0,10)
                       return( 
                          
                          <Card key={article.id} elevation={0} >
                          <Typography variant='subtitle1' color="primary" className={classes.content}>{num}.</Typography>
                          <CardMedia
                            component="img"
                            className={classes.img}
                            alt="aritcle-thumbnail"
                            height="140"
                            image={article.image.thumbnail}
                          />
                          <CardContent>
                            <CardActionArea>
                                <Link to={{pathname:`/article/${article.id}`, article: {article}}}>
                            <Typography variant="subtitle1" className={classes.headlines}>
                              {article.title}
                            </Typography>
                            </Link>
                            <Typography variant="body2" style={{color:'grey'}}>{date}</Typography>
                            <Typography variant="body2" style={{color:'grey'}}>
                              {article.provider.name}
                            </Typography>
                            </CardActionArea>
                          </CardContent>
                        </Card>
                       )
                    } else if(index < 5) {
                        let date = article.datePublished.slice(0,10)
                        return(
                            <Card key={article.id} elevation={0} className={classes.root}>
                            <div>    
                            <CardContent className={classes.details}>
                            <Typography variant="subtitle2" color="primary">{num}.</Typography>
                            <CardActionArea>
                            <Link  to={{pathname:`/article/${article.id}`, article: {article}}}>
                            <Typography variant="subtitle2" className={classes.headlines}>{article.title}</Typography>
                            </Link>
                            </CardActionArea>
                            <Typography variant="body2" style={{color:'grey'}}>{date}</Typography>
                            <Typography variant="body2" style={{color:'grey'}}>{article.provider.name}</Typography>
                            </CardContent>
                            </div>
                            <div>
                            <CardMedia  
                            className={classes.cover}
                            component="img"
                            alt="aritcle-thumbnail"
                            height="90"
                            image={article.image.thumbnail}/>
                             </div>
                            </Card>
                        )

                    }
               
                })}
            </div>
        )
      

    }
}


export default Feed

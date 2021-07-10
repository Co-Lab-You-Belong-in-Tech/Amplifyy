import React, {useEffect} from 'react'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Feed, SingleArticle, Interests, Resources, Splash } from './components'

/**
 * COMPONENT
 */
function Routes(props) {

    return (
      <div>
          <Switch>
            <Route exact path='/' component={Splash} />
            <Route exact path='/Home' component={Feed} />
            <Route exact path='/Start' component={Interests} />
             <Route exact path='/Resources' component={Resources}/>
            <Route path='/article/:articleid' component={SingleArticle} />
          </Switch>
      </div>
    )
  
}

/**
 * CONTAINER
 */
export default withRouter(Routes)

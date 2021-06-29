import React, {Component} from 'react'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home';

/**
 * COMPONENT
 */
class Routes extends Component {

  render() {

    return (
      <div>
          <Switch>
            <Route path='/' exact component={Home} />

          </Switch>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
export default withRouter(Routes)

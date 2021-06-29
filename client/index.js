import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import history from './history'
import App from './App'
import { theme } from './theme/theme'
import { ThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
    <Router history={history}>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </Router>,
  document.getElementById('app')
)

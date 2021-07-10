const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const {db} = require('./db')
const sessionStore = new SequelizeStore({db})
module.exports = app

// logging middleware
app.use(morgan('dev'))
    
// body parsing middleware
app.use(express.json())

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'my best friend is Cody',
    store: sessionStore,
    resave: false,
    saveUninitialized: false //CHANGED FALSE TO TRUE --> KEEPS SESSION ID THE SAME
  })
)

// auth and api routes
app.use('/api', require('./api'))

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'public/index.html')));

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

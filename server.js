const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is listening on port: ${port}`))

// middlewares
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

// controllers
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')
const journalsController = require('./controllers/journals_controller')

app.use(logger)
app.use(express.static('client'))
app.use(express.json())
app.use(sessions)

app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)
app.use('/api/journals', journalsController)

if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}
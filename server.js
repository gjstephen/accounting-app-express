const express = require('express')
const app = express()
const PORT = 3002

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))

// middlewares
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

// controllers
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')

app.use(logger)
app.use(express.static('client'))
app.use(express.json())
app.use(sessions)

app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)

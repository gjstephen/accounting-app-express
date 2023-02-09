const express = require('express')
const router = express.Router()

// models
const Journal = require('../models/journals')

// routes
router.post('/', (req, res) => {
  const { entityId, userId, jrnlNum, narration, date, description, accNum, accName, currency, debit, credit } = req.body

  Journal
    .create( entityId, userId, jrnlNum, narration, date, description, accNum, accName, currency, debit, credit )
})

router.get('/:id', (req, res) => {
  const userId = req.params.id

  Journal
    .findByUser(userId)
    .then(journals => res.json(journals))
})

router.get('/trialBalance/:id', (req, res) => {
  const userId = req.params.id

  Journal
    .sumByUser(userId)
    .then(journals => res.json(journals))
})

module.exports = router
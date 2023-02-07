const express = require('express')
const router = express.Router()

// models
const Journal = require('../models/journals')

// routes
router.post('/', (req, res) => {
  const { journalNum, accNum, accName, currency, debit, credit } = req.body

  Journal
    .create(journalNum, accNum, accName, currency, debit, credit)
})

module.exports = router
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// models
const Journal = require('../models/journals')

// routes
router.post('/', (req, res) => {
  const { journalNum, accNum, accName, currency, debit, credit } = req.body

  Journal
    .create(journalNum, accNum, accName, currency, debit, credit)
})
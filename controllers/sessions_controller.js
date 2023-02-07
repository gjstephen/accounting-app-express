const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// models
const User = require('../models/users')

// routes
router.get('/', (req, res) => {

    // console.log(req.session)
    User
        .findById(req.session.userId)
        .then(user => {
            if (user) {
                res.json(user.username)
            } else {
                res.json(null)
            }
        })
})

// user log in
router.post('/', (req, res) => {
    const { email, password } = req.body

    User
        .findByEmail(email)
        .then(user => {
            if (email === '' || password === '') {
                res.status(400).json({ error: 'email and/or password cannot be blank' })
            } else {
                const isValidPassword = bcrypt.compareSync(password, user.password_digest)
                if (user && isValidPassword) {
                    req.session.userId = user.id
                    // console.log(req.session)
                    res.json(user)
                }
            }
        })
})

// user log out
router.delete('/', (req, res) => {
    req.session.userId = null
    res.json(req.session.userId)
})

module.exports = router
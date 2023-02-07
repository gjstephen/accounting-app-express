const db = require('../db/db')

const User = {

    create: (first_name, last_name, email, passwordDigest) => {
        const sql = `
        INSERT INTO users(first_name, last_name, email, password_digest)
        VALUES ($1, $2, $3, $4)
        RETURNING first_name, last_name
        `

        return db
            .query(sql, [first_name, last_name, email, passwordDigest])
            .then(dbRes => dbRes.rows[0])
    },

    findByEmail: email => {
        const sql = 'SELECT * FROM users WHERE email = $1'

        return db
            .query(sql, [email])
            .then(dbRes => dbRes.rows[0])
    },

    findById: id => {
        const sql = 'SELECT * FROM users WHERE id = $1'

        return db
            .query(sql, [id])
            .then(dbRes => {
                if (dbRes.rows.length > 0) {
                    return dbRes.rows[0]
                } else {
                    return null
                }
            })
    }

}

module.exports = User
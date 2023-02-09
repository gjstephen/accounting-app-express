const db = require('../db/db')

const Journal = {

  create: ( entityId, userId, jrnlNum, narration, date, description, accNum, accName, currency, debit, credit ) => {
    const sql = `
      INSERT INTO general_ledger(entity_id, user_id, journal_number, jrnl_narration, date, line_description, account_number, account_name, currency, debit, credit)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    `

    return db
      .query(sql, [ entityId, userId, jrnlNum, narration, date, description, accNum, accName, currency, debit, credit ])
      .then(dbRes => dbRes.rows[0])
  },

  findByUser: ( userId ) => {
    const sql = `
      SELECT * FROM general_ledger WHERE user_id = $1
    `

    return db
      .query(sql, [userId])
      .then(dbRes => {
        console.log('dbRes:')
        console.log(dbRes.rows)
        return dbRes.rows
      })
  },

  findAll: () => {
    const sql = `
      SELECT * FROM general_ledger
    `

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  }
}

module.exports = Journal
const db = require('../db/db')

const Journal = {
  create: (journalNum, accNum, accName, currency, debit, credit) => {
    const sql = `
      INSERT INTO general_ledger(journal_number, account_number, account_name, currency, devit, credit)
      VALUES ($1, $2, $3, $4, $5, $6)
    `

    return db
      .query(sql, [journalNum, accNum, accName, currency, debit, credit])
  }
}
CREATE DATABASE
accounting_app;
\c accounting_app

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  password_digest TEXT,
  entity_id INT
);

ALTER TABLE users
ADD CONSTRAINT unique_user
UNIQUE(email);

CREATE TABLE general_ledger(
  id SERIAL PRIMARY KEY,
  entity_id INT,
  user_id INT,
  journal_number INT,
  jrnl_narration TEXT,
  date TEXT,
  line_description TEXT,
  account_number INT,
  account_name TEXT,
  currency TEXT,
  debit INT,
  credit INT
);

-- CREATE TABLE entities(
--   id SERIAL PRIMARY KEY,
--   name TEXT,
--   year_end_date DATE
-- );
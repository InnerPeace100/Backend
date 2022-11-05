require('dotenv').config()

module.exports = {
  development: {
    username: "postgres",
    password: "11780000$Aa",
    database: "InnerPeace",
    host: "localhost",
    port: "5432",
    dialect: 'postgres',
    logging: true,
  },
  test: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
  },
}
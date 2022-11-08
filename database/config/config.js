require('dotenv').config()

module.exports = {
  development: {
    username: "postgres",
    password: "pass",
    database: "InnerPeace",
    host: "localhost",
    port: "5432",
    dialect: 'postgres',
    logging: true,
    migrationStorageTableSchema: "custom_schema"
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
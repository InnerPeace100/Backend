const { Sequelize } = require('sequelize');
const db = new Sequelize('postgres://postgres:11780000$Aa@localhost:5432/InnerPeace')
module.exports = db;

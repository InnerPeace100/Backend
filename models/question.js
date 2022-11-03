const { Sequelize, DataTypes } = require('sequelize');
const db = require("../config/db");

const Question = db.define('Question', {
    question: {
        type: DataTypes.STRING
    }
});

module.exports = Question;
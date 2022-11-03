const { Sequelize, DataTypes } = require('sequelize');
const db = require("../config/db");

const Result = db.define('Result', {
   result:{
      type:DataTypes.STRING,
      allowNull:false
   }
});

module.exports = Result;
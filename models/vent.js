const { Sequelize, DataTypes } = require('sequelize');
const db = require("../config/db");

const Vent = db.define('Vent', {
    vent: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    date:{
        type:DataTypes.DATE,
        allowNull:false
    },
    time: {
        type:DataTypes.TIME,
        allowNull:false
    }
});

module.exports = Vent;
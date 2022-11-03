const { Sequelize, DataTypes } = require('sequelize');
const db = require("../config/db");

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    blog_subscription: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

});

module.exports = User;
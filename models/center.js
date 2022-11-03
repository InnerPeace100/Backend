const { Sequelize, DataTypes } = require('sequelize');
const db = require("../config/db");

const Center = db.define('Center', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    longitude: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    Type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'private'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pobox: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    manager_id_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    director_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }

});


module.exports = Center;
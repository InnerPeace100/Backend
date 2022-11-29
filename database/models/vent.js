'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vent extends Model {
    static associate(models) {
      vent.belongsTo(models.user);
      vent.belongsTo(models.professional);
      vent.hasOne(models.chat);
    }
  }
  vent.init({
    vent: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'vent',
  });
  return vent;
};
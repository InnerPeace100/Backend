'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    static associate(models) {
      contact.belongsTo(models.user);
      contact.belongsTo(models.professional);
    }
  }
  contact.init({
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contact',
  });
  return contact;
};
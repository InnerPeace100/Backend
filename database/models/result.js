'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class result extends Model {
   
    static associate(models) {
      result.hasOne(models.user);
      
    }
  }
  result.init({
    result: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'result',
  });
  return result;
};
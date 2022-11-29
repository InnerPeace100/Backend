'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class option extends Model {

    static associate(models) {
      
      option.belongsTo(models.question);
    }
  }
  option.init({
    option: DataTypes.STRING,
    value: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'option',
  });
  return option;
};
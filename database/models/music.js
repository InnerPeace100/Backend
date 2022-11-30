'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class music extends Model {
   
    static associate(models) {
      // define association here
    }
  }
  music.init({
    id: DataTypes.INTEGER,
    links: DataTypes.TEXT,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'music',
  });
  return music;
};
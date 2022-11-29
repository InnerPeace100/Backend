'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class question extends Model {
    
    static associate(models) {
     
      question.hasMany(model.option);
    }
  }
  question.init({
    question: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'question',
  });
  return question;
};
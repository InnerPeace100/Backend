'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chat extends Model {
    static associate(models) {
      chat.hasOne(models.vent);
      chat.hasOne(model.professional);
      chat.belongsTo(model.user);
    }
  }

  chat.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'chat',
  });

  return chat;
};
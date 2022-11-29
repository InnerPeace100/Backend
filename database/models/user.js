'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {  
      user.hasOne(models.contact);
      user.hasMany(models.vent);
      user.belongsToMany(models.center, {
        through: 'booked'
      });
      user.hasMany(model.chat);
      user.hasMany(model.result);
    }
  }
  user.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    blog_subscription: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
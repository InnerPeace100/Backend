'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class center extends Model {
   
    static associate(models) {
    
     center.hasMany(models.professional);
     center.belongsToMany(models.user, {
       through:'booked'
     })

    }
  }
  center.init({
    name: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longtiude: DataTypes.DOUBLE,
    phone_number: DataTypes.STRING,
    type: DataTypes.STRING,
    email: DataTypes.STRING,
    pobox: DataTypes.STRING,
    manager_id: DataTypes.STRING,
    director_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'center',
  });
  return center;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
  
    static associate(models) {
    
      role.belongsToMany(models.professional,{
        through:'ProfessionalRole'
      });
    }
  }
  role.init({
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'role',
  });
  return role;
};
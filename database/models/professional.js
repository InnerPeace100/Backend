'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class professional extends Model {

    static associate(models) {

      professional.belongsToMany(models.center, {
        through: 'ProfessionalCenter'
      });
      professional.belongsToMany(models.role, {
        through: 'ProfessionalRole'
      });
      professional.hasOne(models.contact);
    }
  }
  professional.init({
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'professional',
  });
  return professional;
};
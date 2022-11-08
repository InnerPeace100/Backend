'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class professional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      professional.belongsTo(models.center);
      professional.belongsToMany(models.role,{
        through:'ProfessionalRole'
      });
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
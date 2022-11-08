'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class center extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     center.hasMany(models.professional);
     

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
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      vent.belongsTo(models.user);
      vent.belongsToMany(models.professional, {
        through: 'VentProfessional'
      })
      vent.hasOne(models.chat);
    }
  }
  vent.init({
    vent: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'vent',
  });
  return vent;
};
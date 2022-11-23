'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('centers','manager_id',{
      type:Sequelize.STRING,
      allowNull:true
    });
    await queryInterface.changeColumn('centers','director_id',{
      type:Sequelize.STRING,
      allowNull:true
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('centers','manager_id',{
      allowNull:false
    });
    await queryInterface.changeColumn('centers','director_id',{
      allowNull:false
    });
  }
};

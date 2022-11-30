'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('vents','vent',{
      type:Sequelize.TEXT,
      allowNull:false
    })
  },

  async down (queryInterface, Sequelize) {
    
  }
};

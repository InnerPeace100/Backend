'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.removeColumn('professionals','centerId');
  },

  async down (queryInterface, Sequelize) {
   
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.removeColumn('professionals','role');
  },

  async down (queryInterface, Sequelize) {
 
  }
};

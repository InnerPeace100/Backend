'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.renameColumn('booked', 'ProfessionalId', 'CenterId');
  },

  async down(queryInterface, Sequelize) {

  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.createTable('ProfessionalCenter', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      ProfessionalId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      CenterId: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    })
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('ProfessionalCenter');

  }
};

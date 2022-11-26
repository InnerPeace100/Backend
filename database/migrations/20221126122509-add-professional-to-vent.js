'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('vents', 'to', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'professionals',
        key: 'id'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('vents','to');
  }
};

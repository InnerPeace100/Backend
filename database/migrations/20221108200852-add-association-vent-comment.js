'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
   
    await queryInterface.addColumn('comments', 'VentId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'vents',
        key: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.removeColumn('comments', 'VentId');
  }
};

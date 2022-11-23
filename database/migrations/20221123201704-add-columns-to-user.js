'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'username', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('users', 'password', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'username');
    await queryInterface.removeColumn('users', 'password');
  }
};

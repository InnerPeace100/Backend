'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.removeColumn('professionals', 'phone_number');
    await queryInterface.removeColumn('professionals', 'email');
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.addColumn('professionals', 'phone_number', {
      type:Sequelize.STRING,
      allowNull:false
     });
     await queryInterface.addColumn('professionals', 'email', {
      type:Sequelize.STRING,
      allowNull:false
     });
  }
};

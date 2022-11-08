'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(
      'professionals',
      'CenterId',{
        type:Sequelize.INTEGER,
        references:{
          model:'centers',
          key:'id',
        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL'
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'professionals',
      'CenterId'
    );
  }
};

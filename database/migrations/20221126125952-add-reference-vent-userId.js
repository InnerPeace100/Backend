'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('vents', {
      type: 'foreign key',
      fields: ['UserId'],
      name: 'foreign_user_id',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'CASCADE'
      })
    },
    async down(queryInterface, Sequelize) {
      queryInterface.removeConstraint('vents', 'foreign_user_id');
    }
};

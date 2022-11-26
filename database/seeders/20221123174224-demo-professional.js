'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('professionals', [
      {
        id: 1,
        name: 'eden',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'elsa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'ermi',
        createdAt: new Date(),
        updatedAt: new Date(),
        
      }
    ])
  },

  async down(queryInterface, Sequelize) {

     await queryInterface.bulkDelete('professionals', null, {});
  }
};

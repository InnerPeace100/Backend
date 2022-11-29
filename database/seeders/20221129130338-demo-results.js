'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('results', [{
      id: 1,
      result: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1
    }, {
      id: 2,
      result: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 2
    },
    {
      id: 3,
      result: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 3
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('results', null, {});
  }
};

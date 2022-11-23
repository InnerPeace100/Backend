'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('centers', [
      {
        id: 1,
        name: 'ABC',
        latitude: "12.2564",
        longtiude: "7.2564",
        phone_number: "091215654658",
        type: 'private',
        email: "ermibling13@gmail.com",
        pobox: 3920,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 2,
        name: 'ERF',
        latitude: "12.2564",
        longtiude: "7.2564",
        phone_number: "091215654658",
        type: 'private',
        email: "ermibling13@gmail.com",
        pobox: 3920,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('centers', null, {});

  }
};

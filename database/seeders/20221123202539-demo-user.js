'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'Ermiyas',
      age: 20,
      gender: 'male',
      blog_subscription: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      username: 'ermi123',
      password: '1234'
    },
    {
      id: 2,
      name: 'Robel',
      age: 20,
      gender: 'male',
      blog_subscription: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      username: 'roba123',
      password: '1234'
    },
    {
      id: 3,
      name: 'Mati',
      age: 20,
      gender: 'male',
      blog_subscription: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      username: 'mati123',
      password: '1234'
    }])
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};

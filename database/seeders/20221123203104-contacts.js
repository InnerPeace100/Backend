'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('contacts', [{
       id:1,
       phone:'0912159207',
       email:'ermibling13@gmail.com',
       createdAt: new Date(),
       updatedAt:new Date(),
       UserId:2,
    },
    {
      id:2,
      phone:'0912159207',
      email:'ermibling13@gmail.com',
      createdAt: new Date(),
      updatedAt:new Date(),
      ProfessionalId:1,
    }])
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('contacts', null, {});
  }
};

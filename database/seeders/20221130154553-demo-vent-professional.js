'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('VentProfessional',[{
      createdAt:new Date(),
      updatedAt:new Date(),
      ProfessionalId: 1,
      VentId:1
    },
    {
      createdAt:new Date(),
      updatedAt:new Date(),
      ProfessionalId: 2,
      VentId:1
    },
    {
      createdAt:new Date(),
      updatedAt:new Date(),
      ProfessionalId: 3,
      VentId:2
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('VentProfessional', null, {});
  }
};

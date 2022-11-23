'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('ProfessionalCenter', [{
      createdAt: new Date(),
      updatedAt: new Date,
      ProfessionalId: 1,
      CenterId: 1
    }, {
      createdAt: new Date(),
      updatedAt: new Date,
      ProfessionalId: 2,
      CenterId: 1
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      ProfessionalId: 3,
      CenterId: 1
    }
    ])
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('ProfessionalCenter', null, {});
  }
};

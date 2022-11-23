'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('ProfessionalRole', [{
        createdAt: new Date(),
        updatedAt:new Date,
        ProfessionalId: 1,
        RoleId:2
    },{
      createdAt: new Date(),
      updatedAt:new Date,
      ProfessionalId: 2,
      RoleId:1
  }])
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('ProfessionalRole', null, {});
  }
};

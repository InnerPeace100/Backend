'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('booked',{
      createdAt:{
        allowNull:false,
        type:Sequelize.DATE,
      },
      updatedAt:{
        allowNull:false,
        type:Sequelize.DATE
      },
      UserId:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      ProfessionalId:{
        type:Sequelize.INTEGER,
        allowNull:false
      }
    } )
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('booked');
  }
};

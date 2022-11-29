'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn('contacts','ProfessionalId', {
      type:Sequelize.INTEGER,
      allowNull:true,
      references:{
        model:'professionals',
        key:'id'
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('contacts','ProfessionalId');
  }
};

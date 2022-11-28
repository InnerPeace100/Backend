'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn('chats','ventId',{
      type:Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'vents',
        key:'id'
      }
     })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('chats','ventId');
  }
};

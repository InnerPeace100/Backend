'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.changeColumn('chats','content',{
    type:Sequelize.TEXT,
    allowNull:false
   })
  },

  async down (queryInterface, Sequelize) {
   
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
    await queryInterface.addColumn('options', 'QuestionId', {
      type:Sequelize.INTEGER,
      references:{
        model:'questions',
        key:'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('options', 'QuestionId');
  }
};

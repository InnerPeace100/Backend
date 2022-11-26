'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('questions', [{
      id: 1,
      question: "Question 1",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      question: "Question 2",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      question: "Question 3",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('questions', null, {});
  }
};

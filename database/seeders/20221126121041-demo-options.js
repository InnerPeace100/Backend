'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('options', [{
      id: 1,
      option: "option 1",
      value: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      QuestionId:1

    }, {
      id: 2,
      option: "option 2",
      value: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      QuestionId:1
    }, {
      id: 3,
      option: "option 3",
      value: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      QuestionId:1
    },
    {
      id: 4,
      option: "option 1",
      value: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      QuestionId:2

    }, {
      id: 5,
      option: "option 2",
      value: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      QuestionId:2
    }, {
      id: 6,
      option: "option 3",
      value: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      QuestionId:2
    }])
  },


  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('options', null, {});
     
  }
};

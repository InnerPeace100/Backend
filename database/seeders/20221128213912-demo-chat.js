'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('chats', [{
      id: 1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt. Quisque id diam vel quam elementum pulvinar etiam non. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Netus et malesuada fames ac turpis egestas maecenas.",
      createdAt:new Date(),
      updatedAt:new Date(),
      professional_id:1,
      ventId:1,
      UserId:1
    },
    {
      id: 2,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt. Quisque id diam vel quam elementum pulvinar etiam non. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Netus et malesuada fames ac turpis egestas maecenas.",
      createdAt:new Date(),
      updatedAt:new Date(),
      professional_id:2,
      ventId:2,
      UserId:2
    },
    {
      id: 3,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt. Quisque id diam vel quam elementum pulvinar etiam non. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Netus et malesuada fames ac turpis egestas maecenas.",
      createdAt:new Date(),
      updatedAt:new Date(),
      professional_id:2,
      ventId:3,
      UserId:3
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('chats', null, {});
  }
};

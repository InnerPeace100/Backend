'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vents', [{
      id: 1,
      vent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Sem fringilla ut morbi tincidunt. Quisque id diam vel quam elementum 
      pulvinar etiam non. Hac habitasse platea dictumst vestibulum rhoncus est 
      pellentesque. Netus et malesuada fames ac turpis egestas maecenas.`,
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1,
      to: 1
    },
    {
      id: 2,
      vent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Sem fringilla ut morbi tincidunt. Quisque id diam vel quam elementum 
      pulvinar etiam non. Hac habitasse platea dictumst vestibulum rhoncus est 
      pellentesque. Netus et malesuada fames ac turpis egestas maecenas.`,
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 2,
      to: 2
    },
    {
      id: 3,
      vent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Sem fringilla ut morbi tincidunt. Quisque id diam vel quam elementum 
      pulvinar etiam non. Hac habitasse platea dictumst vestibulum rhoncus est 
      pellentesque. Netus et malesuada fames ac turpis egestas maecenas.`,
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 3,
      to: 3
    },
    {
      id: 4,
      vent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Sem fringilla ut morbi tincidunt. Quisque id diam vel quam elementum 
      pulvinar etiam non. Hac habitasse platea dictumst vestibulum rhoncus est 
      pellentesque. Netus et malesuada fames ac turpis egestas maecenas.`,
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 3,
      to: 3
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vents', null, {});
  }
};

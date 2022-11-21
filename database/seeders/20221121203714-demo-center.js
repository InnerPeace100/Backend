'use strict';

/** @type {import('sequelize-cli').Migration} */
import { faker } from '@faker-js/faker';
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('centers',[
    {
      name: faker.company.name,
      latitude: faker.address.latitude,
      longtiude: faker.address.longitude,
      phone_number: faker.phone.number,
      type: 'private',
      email: faker.internet.email,
      pobox: faker.datatype.number,
      manager_id: DataTypes.STRING,
      director_id: DataTypes.STRING
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

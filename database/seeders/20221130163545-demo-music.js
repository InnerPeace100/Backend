'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('music', [{
      id: 1,
      links: 'https://www.youtube.com/watch?v=_4kHxtiuML0&t=798s',
      title: 'Calm Working Music',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      links: 'https://www.youtube.com/watch?v=_4kHxtiuML0&t=798s',
      title: 'Calm Relaxing Music',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('music', null, {});
  }
};

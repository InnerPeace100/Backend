'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

 
    // await queryInterface.removeColumn('vents', 'time');
    // await queryInterface.addColumn('vents', {
    //   ventTo: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    //   },
    //   createdAt: {
    //     type: Sequelize.DATE,
    //     allowNull: false
    //   },
    //   sentAt: {
    //     type: Sequelize.TIME,
    //     allowNull: true
    //   }
    // })
    await queryInterface.removeColumn('vents', 'UserId');
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.addColumn('vents', 'date');
    // await queryInterface.addColumn('vents', 'time');
    // await queryInterface.removeColumn('vents', 'createdAt');
    // await queryInterface.removeColumn('vents', 'ventTo');
    // await queryInterface.removeColumn('vents', 'sentAt');
  }
};

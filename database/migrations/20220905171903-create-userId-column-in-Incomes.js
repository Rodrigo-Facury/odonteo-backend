'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Income',
      'userId',
     Sequelize.INTEGER
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Income',
      'userId'
    );
  }
};

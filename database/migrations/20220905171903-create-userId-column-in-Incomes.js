'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Incomes',
      'userId',
     Sequelize.INTEGER
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Incomes',
      'userId'
    );
  }
};

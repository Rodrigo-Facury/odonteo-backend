'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.changeColumn('Incomes', 'userId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'userId',
        references: {
          model: 'Users',
          key: 'id',
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.changeColumn('Incomes', 'userId', {
      type: Sequelize.INTEGER
    })
  }
};

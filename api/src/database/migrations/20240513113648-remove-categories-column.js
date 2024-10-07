'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.removeColumn('Products', 'category');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'category', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};

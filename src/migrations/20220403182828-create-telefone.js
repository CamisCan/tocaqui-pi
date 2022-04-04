'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('telefones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ddd: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING(9),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('telefones');
  }
};
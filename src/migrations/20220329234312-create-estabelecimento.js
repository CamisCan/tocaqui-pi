'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Estabelecimentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      razao_social: {
        type: Sequelize.STRING(100)
      },
      cnpj: {
        type: Sequelize.STRING(14)
      },
      nome_fantasia: {
        type: Sequelize.STRING(100)
      },
      sobre_seu_negocio: {
        type: Sequelize.STRING(100)
      },
      responsavel_pela_casa: {
        type: Sequelize.STRING(100)
      },
      site: {
        type: Sequelize.STRING(100)
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
    await queryInterface.dropTable('Estabelecimentos');
  }
};
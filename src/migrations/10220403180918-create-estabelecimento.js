'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('estabelecimentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      razao_social: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique:true,
      },
      cnpj: {
        type: Sequelize.STRING(14),
        allowNull: false,
        unique:true,
      },
      nome_fantasia: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: false,
      },
      sobre_seu_negocio: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: false,
      },
      responsavel:{
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: false,
      },
      tel:{
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: false,
      },
      site: {
        type: Sequelize.STRING(100),
        allowNull: true,
        unique: true,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('estabelecimentos');
  }
};
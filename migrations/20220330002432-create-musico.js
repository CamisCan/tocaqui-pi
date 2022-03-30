'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Musicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cpf: {
        type: Sequelize.STRING
      },
      nome_completo: {
        type: Sequelize.STRING
      },
      nome_artistico: {
        type: Sequelize.STRING
      },
      sobre_voce: {
        type: Sequelize.STRING
      },
      data_cascimento: {
        type: Sequelize.DATE
      },
      estilo_musical: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Musicos');
  }
};
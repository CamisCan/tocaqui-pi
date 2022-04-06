'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('musicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_completo: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique:false,
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique:true,
      },
      nome_artistico: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:true,
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
        unique:false,
      },
      sobre_vc: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique:false,
      },
      estilo_musical: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique:false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('musicos');
  }
};
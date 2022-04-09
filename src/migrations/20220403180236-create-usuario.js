'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      foto_perfil: {
        type: Sequelize.STRING(255),
        allowNull: true,
        unique: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      senha: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: false,
      },
        estabelecimentos_id:{
          type:Sequelize.INTEGER,
          references: {
          model: 'estabelecimentos',
          key: 'id'
          }
      },
        musicos_id:{
          type:Sequelize.INTEGER,
          references: {
          model: 'musicos',
          key: 'id'
      }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};
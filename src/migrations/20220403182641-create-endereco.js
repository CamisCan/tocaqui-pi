'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logradouro:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      numero:{
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      complemento:{
        type:  Sequelize.STRING(100),
      },
      cep:{
        type: Sequelize.STRING(8),
        allowNull:false,
      },
      bairro:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      cidade:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      uf:{
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      estabelecimentos_id:{
        type: Sequelize.INTEGER,
        references: {
          model:'estabelecimentos',
          key:'id'
        }
      },
      musicos_id:{
        type: Sequelize.INTEGER,
        references: {
          model:'musicos',
          key:'id'
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('enderecos');
  }
};
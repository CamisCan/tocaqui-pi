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
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      numero:{
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      complemento:{
        type:  DataTypes.STRING(100),
      },
      cep:{
        type: DataTypes.STRING(8),
        allowNull:false,
      },
      bairro:{
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      cidade:{
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      uf:{
        type: DataTypes.STRING(2),
        allowNull: false,
      },
      estabelecimentos_id:{
        type: DataTypes.INTEGER,
        references: {
          model:'estabelecimentos',
          key:'id'
        }
      },
      musicos_id:{
        type: DataTypes.INTEGER,
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
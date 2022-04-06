'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mensagens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mensagem: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      estabelecimentos_id:{
        type:DataTypes.INTEGER,
        references: {
          model: 'estabelecimentos',
          key: 'id'
        }
      },
      musicos_id:{
        type:DataTypes.INTEGER,
        references: {
          model: 'musicos',
          key: 'id'
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('mensagens');
  }
};
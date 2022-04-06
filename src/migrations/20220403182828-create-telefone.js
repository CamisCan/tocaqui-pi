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
      ddd:{
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING(9),
        allowNull: false,
      },
      estabelecimentos_id:{
        type: Sequelize.INTEGER,
        references: {
          model: 'estabelecimentos',
          key: 'id'
        }
      },
      musicos_id:{
        type: Sequelize.INTEGER,
        references: {
          model: 'musicos',
          key: 'id'
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('telefones');
  }
};
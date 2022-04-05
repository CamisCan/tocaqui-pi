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
        type:DataTypes.STRING(2),
        allowNull: false,
      },
      telefone: {
        type:DataTypes.STRING(9),
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
    await queryInterface.dropTable('telefones');
  }
};
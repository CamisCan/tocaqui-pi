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
<<<<<<< HEAD
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
        unique:true,
      },
      sobre_seu_negocio: {
        type: Sequelize.TEXT,
      },
      responsavel_pela_casa: {
        type: Sequelize.STRING(100),
      },
      site: {
        type: Sequelize.STRING(100),
      },
=======
      razao_social:{
        type: Sequelize.STRING(100),
        allowNull: false,
        unique:true,
      },
      cnpj:{
        type: Sequelize.STRING(14),
        allowNull: false,
        unique:true,
      },
      nome_fantasia:{
        type:Sequelize.STRING(100),
        allowNull:false,
      },
      sobre_seu_negocio:{
        type:Sequelize.TEXT,
      }, 
      responsavel_pela_casa:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      site:{
        type: Sequelize.STRING(100),
      },
>>>>>>> 3c5046c444dbf328bde67bef1ac5e746e54f2180
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('estabelecimentos');
  }
};
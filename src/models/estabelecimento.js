'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estabelecimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Estabelecimento.belongsTo(models.Usuario, {
        as: 'estabelecimento_usuario',
        foreignKey: 'usuario_id',
        onDelete: 'CASCATE',
        onUpdate: 'CASCATE', 
      });
      
      Estabelecimento.belongsTo(models.Telefone,{
        as: 'estabelecimento-telefone',
        foreignKey: 'estabelecimentos_id',
        onDelete: 'RESTRICT',
        onUpdate: 'NO ACTION',
      });

      Estabelecimento.belongsTo(models.Endereco, {
        as: 'estabelecimento_endereco',
        foreignKey: 'estabelecimento_id',
        onDelete: 'RESTRICT',
        onUpdate: 'NO ACTION',
      });
  } 
  }
  Estabelecimento.init({
    razao_social:{
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    cnpj:{
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: true,
    },
    nome_fantasia:{
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: false,
    },
    sobre_seu_negocio:{
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false,
    }, 
    responsavel:{
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: false,
    },
    tel:{
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: false,
    },
    site:{
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Estabelecimento',
    tableName: 'estabelecimentos',
    freezeTableName: true,
    timestamps: false
  });
  return Estabelecimento;
};
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
      // define association here
    }
  }
  Estabelecimento.init({
    razao_social:{
      type: DataTypes.STRING(100),
      allowNull: false,
      unique:true,
    },
    cnpj:{
      type: DataTypes.STRING(14),
      allowNull: false,
      unique:true,
    },
    nome_fantasia:{
      type:DataTypes.STRING(100),
      allowNull:false,
    },
    sobre_seu_negocio:{
      type:DataTypes.STRING(100),
    }, 
    responsavel_pela_casa:{
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    site:{
      type: DataTypes.STRING(100),
    },
  }, {
    sequelize,
    modelName: 'Estabelecimento',
    tableName: 'estabelecimentos',
    timestamps: false,
  });
  return Estabelecimento;
};
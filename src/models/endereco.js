'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Endereco.init({
    logradouro: DataTypes.STRING(100),
    numero: DataTypes.STRING(6),
    complemento: DataTypes.STRING(50),
    cep: DataTypes.STRING(8),
    bairro: DataTypes.STRING(100),
    cidade: DataTypes.STRING(100),
    estado: DataTypes.STRING(2)
  }, {
    sequelize,
    modelName: 'Endereco',
    tableName: 'Enderecos',
    freezeTableName: true,
    timestamps: false
  });
  return Endereco;
};
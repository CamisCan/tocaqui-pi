'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Musico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Musico.init({
    cpf: DataTypes.STRING,
    nome_completo: DataTypes.STRING,
    nome_artistico: DataTypes.STRING,
    sobre_voce: DataTypes.STRING,
    data_cascimento: DataTypes.DATE,
    estilo_musical: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Musico',
    tableName: 'musicos',
    timestamps: false
  });
  return Musico;
};
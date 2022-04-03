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
    sobre_vc: DataTypes.STRING,
    data_nascimento: DataTypes.DATEONLY,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    estilo_musical: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Musico',
    tableName: 'Musicos',
    freezeTableName: true,
    timestamps: false
  });
  return Musico;
};
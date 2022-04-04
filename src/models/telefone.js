'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Telefone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Telefone.init({
    ddd: DataTypes.STRING(2),
    telefone: DataTypes.STRING(9)
  }, {
    sequelize,
    modelName: 'Telefone',
    tableName: 'Telefones',
    freezeTableName: true,
    timestamps: false
  });
  return Telefone;
};
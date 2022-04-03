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
    },
    musicos_id:{
      type:DataTypes.INTEGER,
    }, 
  }, {
    sequelize,
    modelName: 'Telefone',
    tableName: 'telefones',
    freezeTableName: true,
    timestamps: false,
  });
  return Telefone;
};
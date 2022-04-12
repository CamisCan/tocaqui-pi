'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Telefone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Telefone.belongsTo(models.Estabelecimento,{
        as:'estabelecimento',
        foreignKey: 'estabelecimentos_id',
        onDelete: 'RESTRICT',
        onUpdate: 'NO ACTION'
      });
  
    }
  }
  Telefone.init({
    telefone: {
      type: DataTypes.STRING(9),
      unique: false,
    },
    estabelecimentos_id:{
      type: DataTypes.INTEGER,
      model: 'estabelecimentos',
      key: 'id'
    },
    musicos_id:{
      type: DataTypes.INTEGER,
      model: 'musicos',
      key: 'id'
    }, 
  }, {
    sequelize,
    modelName: 'Telefone',
    tableName: 'telefones',
    freezeTableName: true,
    timestamps: false
  });
  return Telefone;
};
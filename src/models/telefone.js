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
      Telefone.hasMany(models.Estabelecimento,{
        as:'estabelecimento',
        foreignKey: 'estabelecimentos_id',
        onDelete: 'RESTRICT',
        onUpdate: 'NO ACTION'
      });
      
      Telefone.hasMany(models.Musico, {
        as: 'musico',
        foreignKey: 'musico_id',
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
      });
    }
  }
  Telefone.init({
    ddd:{
      type: DataTypes.STRING(2),
      allowNull: false,
      unique: false,
    },
    telefone: {
      type: DataTypes.STRING(9),
      allowNull: false,
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
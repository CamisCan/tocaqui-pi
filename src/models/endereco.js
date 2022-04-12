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
      Endereco.belongsTo(models.Estabelecimento, {
        as: 'estabelecimento',
        foreignKey: 'estabelecimentos_id',
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
      });
      {
        Endereco.belongsTo(models.Musico, {
          as: 'musico',
          foreignKey: 'musico_id',
          onDelete: 'CASCADE',
          onUpdate: 'NO ACTION',
        });
      }
    }
  
  }
  Endereco.init({
    logradouro:{
      type: DataTypes.STRING(100),
      unique: false,
    },
    numero:{
      type: DataTypes.STRING(10),
      unique: false,
    },
    complemento:{
      type: DataTypes.STRING(100),
      unique: false,
    },
    cep:{
      type: DataTypes.STRING(8),
      unique: false,
    },
    bairro:{
      type: DataTypes.STRING(100),
      unique: false,
    },
    cidade:{
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: false,
    },
    uf:{
      type: DataTypes.STRING(2),
      allowNull: true,
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
    modelName: 'Endereco',
    tableName: 'enderecos',
    freezeTableName: true,
    timestamps: false
  });
  return Endereco;
};
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
      Endereco.hasMany(models.Estabelecimento, {
        as: 'endereco_estabelecimento',
        foreignKey: 'estabelecimentos_id',
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
      });
      {
        Endereco.hasMany(models.Musico, {
          as: 'endereco_musico',
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
      allowNull: false,
      unique: false,
    },
    numero:{
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: false,
    },
    complemento:{
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: false,
    },
    cep:{
      type: DataTypes.STRING(8),
      allowNull: false,
      unique: false,
    },
    bairro:{
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: false,
    },
    cidade:{
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: false,
    },
    uf:{
      type: DataTypes.STRING(2),
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
    modelName: 'Endereco',
    tableName: 'enderecos',
    freezeTableName: true,
    timestamps: false
  });
  return Endereco;
};
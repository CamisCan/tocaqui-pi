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
        as: 'endereco_estabelecimento',
        foreignKey: 'estabelecimentos_id',
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
      });

      {
        Endereco.belongsTo(models.Musico, {
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
    },
    numero:{
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    complemento:{
      type:  DataTypes.STRING(100),
    },
    cep:{
      type: DataTypes.STRING(8),
      allowNull:false,
    },
    bairro:{
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cidade:{
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    uf:{
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    estabelecimentos_id:{
      type: DataTypes.INTEGER,
    },
    musicos_id:{
      type: DataTypes.INTEGER,
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
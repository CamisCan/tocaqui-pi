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
    Musico.belongsTo(models.Usuario, {
      as: 'usuario',
      foreignKey: 'usuario_id',
      onDelete: 'CASCATE',
      onUpdate: 'CASCATE',
    });
    
    Musico.belongsTo(models.Telefone,{
      as: 'telefones',
      foreignKey: 'musicos_id',
      onDelete: 'RESTRICT',
      onUpdate: 'NO ACTION',
    });
    
    Musico.belongsTo(models.Endereco, {
      as: 'enderecos',
      foreignKey: 'musicos_id',
      onDelete: 'RESTRICT',
      onUpdate: 'NO ACTION',
    });
    }
    }
    Musico.init({
      nome_completo: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: false,
      },

      cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true,
      },
      nome_artistico: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: false,
      },
      sobre_vc: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: false,
      },
      data_nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        unique: false,
      },
      estilo_musical: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
  }, {
    sequelize,
    modelName: 'Musico',
    tableName: 'musicos',
    freezeTableName: true,
    timestamps: false
  });

  return Musico;
};


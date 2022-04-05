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
      as: 'musico_usuario',
      foreignKey: 'usuario_id',
      onDelete: 'CASCATE',
      onUpdate: 'CASCATE',
    });
    
    Musico.hasMany(models.Telefone,{
      as: 'musicos-telefone',
      foreignKey: 'musicos_id',
      onDelete: 'RESTRICT',
      onUpdate: 'NO ACTION',
    });
    
    Musico.hasMany(models.Endereco, {
      as: 'musicos_endereco',
      foreignKey: 'musicos_id',
      onDelete: 'CASCADE',
      onUpdate: 'NO ACTION',
    });
    }
    }
    Musico.init({
      nome_completo: DataTypes.STRING(255),
      cpf: DataTypes.STRING(11),
      nome_artistico: DataTypes.STRING(45),
      sobre_vc: DataTypes.TEXT,
      data_nascimento: DataTypes.DATEONLY,
      estilo_musical: DataTypes.STRING
    }, 
    
    {
    sequelize,
    modelName: 'Musico',
    tableName: 'musicos',
    freezeTableName: true,
    timestamps: false
  });

  return Musico;
};


'use strict';
const {
  Model
} = require('sequelize');
const usuario = require('./usuario');
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
    };

    static associate(models) {
      Musico.hasOne(models.Mensagem, {
        as: 'musico_mensagem',
        foreignKey: 'enviado_por',
        foreignKey: 'recebido_por',
        onDelete: 'RESTRICT',
        onUpdate: 'NO ACTION'
      });
      };

    }
    Musico.init({
      nome_completo: DataTypes.STRING(255),
      cpf: DataTypes.STRING(11),
      nome_artisitico: DataTypes.STRING(45),
      data_nascimento: DataTypes.DATEONLY,
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
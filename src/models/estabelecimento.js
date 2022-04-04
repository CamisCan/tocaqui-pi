'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estabelecimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Estabelecimento.belongsTo(models.Usuario, {
        as: 'estabelecimento_usuario',
        foreignKey: 'usuario_id',
        onDelete: 'CASCATE',
        onUpdate: 'CASCATE',
      });
      };

      static associate(models) {
      Estabelecimento.hasOne(models.Mensagem, {
        as: 'estabelecimento_mensagem',
        foreignKey: 'enviado_por',
        foreignKey: 'recebido_por',
        onDelete: 'RESTRICT',
        onUpdate: 'NO ACTION'
      });
      };

  }
  Estabelecimento.init({
    razao_social: DataTypes.STRING(100),
    cnpj: DataTypes.STRING(14),
    nome_fantasia: DataTypes.STRING(100),
    sobre_seu_negocio: DataTypes.STRING(),
    responsavel_pela_casa: DataTypes.STRING(100),
    site: DataTypes.STRING(100)
  }, {
    sequelize,
    modelName: 'Estabelecimento',
    tableName: 'Estabelecimentos',
    freezeTableName: true,
    timestamps: false
  });
  return Estabelecimento;
};
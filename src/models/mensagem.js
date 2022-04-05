'use strict';
const {
  Model, ForeignKeyConstraintError
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mensagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    Mensagem.belongsTo(models.Musico,{
      as: 'mensagem_musico',
      ForeignKey: 'enviado_por',
      ForeignKey: 'recebido_por',
      onDelete: 'RESTRICT',
      onUpdate: 'NO ACTION'
    })
    };

    static associate(models) {
      Mensagem.belongsTo(models.Estabelecimento,{
        as: 'mensagem_estabelecimento',
        ForeignKey: 'enviado_por',
        ForeignKey: 'recebido_por',
        onDelete: 'RESTRICT',
        onUpdate: 'NO ACTION'
      })
      };
      
  }
  Mensagem.init({
    mensagem: DataTypes.TEXT(),
    data: DataTypes.DATE(10)
  }, {
    sequelize,
    modelName: 'Mensagem',
    tableName: 'mensagens',
    freezeTableName: true,
    timestamps: false
  });
  return Mensagem;
};
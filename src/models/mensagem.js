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
    Mensagem.belongsTo(models.Usuario,{
      foreignKey: 'enviado_por',
      onDelete: 'RESTRICT',
      onUpdate: 'NO ACTION'
    })
    Mensagem.belongsTo(models.Usuario,{
      foreignKey: 'recebido_por',
      onDelete: 'RESTRICT',
      onUpdate: 'NO ACTION'
    })
    };
  }
  Mensagem.init({
    mensagem: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false,
    },

    data: {
      type: DataTypes.DATE,
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
    modelName: 'Mensagem',
    tableName: 'mensagens',
    freezeTableName: true,
    timestamps: false,
  });
  return Mensagem;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasOne(models.Musico, {
        as: 'usuario_musico',
        foreignKey: 'usuario_id',
        onDelete: 'CASCATE',
        onUpdate: 'CASCATE'
      });

      Usuario.hasOne(models.Estabelecimento, {
        as: 'usuario_estabelecimento',
        foreignKey: 'estabeleciemento_id',
        onDelete: 'CASCATE',
        onUpdate: 'CASCATE'
      });
    };
  
  }
  Usuario.init({
    foto_perfil: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    senha: DataTypes.STRING(255)
  },{
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    freezeTableName: true,
    timestamps: false
  });
  
  return Usuario;
};
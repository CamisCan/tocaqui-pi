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
      // define association here
    }
  }
  Usuario.init({
    foto_perfil: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    senha: DataTypes.STRING(255)
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'Usuarios',
    freezeTableName: true,
    timestamps: false
  });
  return Usuario;
};
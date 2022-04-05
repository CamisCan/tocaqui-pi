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
      Usuario.hasMany(models.Musico, {
        as: 'usuario_musico',
        foreignKey: 'usuario_id',
        onDelete: 'CASCATE',
        onUpdate: 'CASCATE'
      });

      Usuario.hasMany(models.Estabelecimento, {
        as: 'usuario_estabelecimento',
        foreignKey: 'estabeleciemento_id',
        onDelete: 'CASCATE',
        onUpdate: 'CASCATE'
      });
    };
  
  }
  Usuario.init({
      foto_perfil: {
      Type: DataTypes.STRING(255),
      allowNull: false,
      unique:false,
    },
    email: {
      Type: DataTypes.STRING(255),
      allowNull: false,
      unique:true,
    },
    senha: {
      Type: DataTypes.STRING(255),
      allowNull: false,
      unique:false,
    },
    estabelecimentos_id:{
      type:DataTypes.INTEGER,
    },
    musicos_id:{
      type:DataTypes.INTEGER,
    }, 
  },{
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    freezeTableName: true,
    timestamps: false
  });
  
  return Usuario;
};
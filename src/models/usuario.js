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
      Usuario.belongsTo(models.Musico, {
        foreignKey: 'musicos_id',
        onDelete: 'CASCATE',
        onUpdate: 'CASCATE'
      });
      Usuario.belongsTo(models.Estabelecimento, {
        as: 'estabelecimento',
        foreignKey: 'estabeleciementos_id',
        onDelete: 'CASCATE',
        onUpdate: 'CASCATE'
     });
  };
  }
    Usuario.init({
      foto_perfil: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique:false,
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
  },{
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    freezeTableName: true,
    timestamps: false
  });
  return Usuario;
};
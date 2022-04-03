<<<<<<< HEAD
const path = require('path');
const fs = require('fs');
const { uuid } = require('uuidv4');

module.exports = {
findAll(){
    const arquivo = fs.readFileSync(path.join(__dirname, '..', 'database', 'db.json'), {encoding: 'utf-8'});
    const objeto = JSON.parse(arquivo);
    const musicos = objeto.musicos;

    return musicos;
},

findById(id){
},

findByEmail(email){
    const arquivo = fs.readFileSync(path.join(__dirname, '..', 'database', 'db.json'), {encoding: 'utf-8'});
    const objeto = JSON.parse(arquivo);

    const meuMusico = objeto.musicos.find(musico => musico.email == email);

    return meuMusico;
},

create(musico){
    const arquivo = fs.readFileSync(path.join(__dirname, '..', 'database', 'db.json'), {encoding: 'utf-8'});
    const objeto = JSON.parse(arquivo)

    objeto.musicos.push(musico);
    const objetoEmString = JSON.stringify(objeto);

    fs.writeFileSync(path.join(__dirname, '..', 'database', 'db.json'), objetoEmString);

    return musico;

    //db.musicos.push({ id: uuid(), ...musico });

    //const json = JSON.stringify(db);
    //fs.writeFileSync('src/database/db.json', json);
},

update(id, musico){
},

delete(id){
},

};
=======
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
      // define association here
    }
  }
  Musico.init({
    cpf: DataTypes.STRING,
    nome_completo: DataTypes.STRING,
    nome_artistico: DataTypes.STRING,
    sobre_vc: DataTypes.STRING,
    data_nascimento: DataTypes.DATEONLY,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
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
>>>>>>> 32600986f6a571fdca38c16b9e0f448f9b5f01cf

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

    objeto.musicos.push(novoMusico);
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

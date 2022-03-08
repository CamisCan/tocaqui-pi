const fs = require('fs');
const { uuid } = require('uuidv4');

let db = require('../database/db.json');

module.exports = {
findAll(){
    return db.musicos;
},

findById(id){
},

create(musico){
    db.musicos.push({ id: uuid(), ...musico });

    const json = JSON.stringify(db);
    fs.writeFileSync('src/database/db.json', json);
},
 
update(id, musico){
},

delete(id){
},
};
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
},
 
update(id, musico){
},

delete(id){
},
};
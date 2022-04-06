const path = require('path')
const crypto = require('crypto');
const multer = require('multer');

const configuracao = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', 'public', 'uploads'),
        filename: (req, file, callback) => {
            const hash = crypto.randomBytes(8).toString('hex');
            const foto_perfil = `${hash}-${file.originalname}`

            callback(null, foto_perfil);
        }  
    })
};


module.exports = configuracao;
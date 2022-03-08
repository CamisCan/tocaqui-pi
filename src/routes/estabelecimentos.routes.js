const express = require('express');

const estabelecimentosController = require('../controllers/estabelecimentosController');

const router = express.Router();

router.get('/cadastrar', estabelecimentosController.exibeFormularioCadastroEstabelecimento);
router.post('/cadastrar', estabelecimentosController.cadastrar);

router.get('/login', estabelecimentosController.exibeFormulariologinEstabelecimento);
router.post('/login', estabelecimentosController.fazerLoginEstabelecimento);

router.get('/estabelecimento/perfil-estabelecimento',  (req, res) => {
    res.render('/estabelecimento/perfil-estabelecimento')
});

module.exports = router; 
const express = require('express');

const musicosController = require('../controllers/musicosController');

const router = express.Router();

router.get('/cadastrar', musicosController.exibeFormularioCadastroMusico);
router.post('/cadastrar', musicosController.cadastrar);


router.get('/login', musicosController.exibeFormulariologinMusico);
router.post('/login', musicosController.fazerLoginMusico);

router.get('/musico/perfil-musico',  (req, res) => {
    res.render('/musico/perfil-musico')
});

module.exports = router; 
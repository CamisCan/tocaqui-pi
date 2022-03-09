const express = require('express');

const musicosController = require('../controllers/musicosController');
const uploadFotos = require('../middlewares/uploadFotos');

const router = express.Router();

router.get('/cadastrar', musicosController.exibeFormularioCadastroMusico);
router.post('/cadastrar', uploadFotos, musicosController.cadastrar);

router.get('/login', musicosController.exibeFormulariologinMusico);
router.post('/login', musicosController.fazerLoginMusico);

router.get('lista/musicos', musicosController.exibeListaMusicos);


module.exports = router; 
const express = require('express');

const musicoEstaLogado = require('../middlewares/musicoEstaLogado');
const estabelecimentoEstaLogado = require('../middlewares/estabelecimentoEstaLogado');
const musicoController = require ('../controllers/musicosController')

const uploadFotos = require('../middlewares/uploadFotos');
const { exibeMusico } = require('../controllers/musicosController');

const router = express.Router();

router.use(musicoEstaLogado);
router.use(estabelecimentoEstaLogado);


router.get('/',  (req, res) => {
    res.render('home')
});

router.get('/home',  (req, res) => {
    res.render('home')
});

router.get('/quem-somos',  (req, res) => {
    res.render('sobre-nos')
});

router.get('/como-funciona',  (req, res) => {
    res.render('como-funciona')
});

router.get('/parceiros',  (req, res) => {
    res.render('parceiros')
});

router.get('/blog',  (req, res) => {
    res.render('blog')
});


//Musico//

router.get('/login-musico',  (req, res) => {
    res.render('login-musico')
});

router.get('/musico-criado',  (req, res) => {
    res.render('musico-criado')
});

router.get('/musico/perfil-musico', musicoController.exibeMusico);

router.get('/lista',  (req, res) => {
    res.render('musico-criado')
});

//Estabelecimento//

router.get('/login-estabelecimento',  (req, res) => {
    res.render('login-estabelecimento')
});

router.get('/estabelecimento-criado',  (req, res) => {
    res.render('estabelecimento-criado')
}); 

router.get('/estabelecimento/perfil-estabelecimento',  (req, res) => {
    res.render('perfil-estabelecimento')
});



module.exports = router;

const express = require('express');
const musicoEstaLogado = require('../middlewares/musicoEstaLogado');
const uploadFotos = require('../middlewares/uploadFotos');

const router = express.Router();

router.use(musicoEstaLogado);

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

router.get('/login-musico',  (req, res) => {
    res.render('login-musico')
});

router.get('/login-estabelecimento',  (req, res) => {
    res.render('login-estabelecimento')
});

router.get('/musico-criado',  (req, res) => {
    res.render('musico-criado')
});

router.get('/estabelecimento-criado',  (req, res) => {
    res.render('estabelecimento-criado')
});

router.get('/estebelecimento/perfil-estabelecimento',  (req, res) => {
    res.render('perfil-estabelecimento')
});

router.get('/lista-musicos',  (req, res) => {
    res.render('lista-musicos')
});

router.get('/lista-estabelecimentos',  (req, res) => {
    res.render('lista-estabelecimentos')
});

module.exports = router;

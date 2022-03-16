const fs =require('fs');
const path = require('path');
const bcrypt = require('bcrypt'); 
const musico = require('../models/musico');

const musicosController = {
  cadastrar: (req, res) => {
    const saltRounds = 10;
    const hash = bcrypt.hashSync(req.body.senha, saltRounds);
  
    const novoMusico = {
    nome_completo: req.body.nome_completo,
    nome_artistico: req.body.nome_artistico,
    sobre_vc: req.body.sobre_vc,
    email: req.body.email,
    data_nascimento: req.body.data_nascimento,
    cidade: req.body.cidade,
    estado: req.body.estado,
    estilo_musical: req.body.estilo_musical,
    senha: hash,
    eh_admin: false,
    imagem: req.file.filename
    }
    
    musico.create(novoMusico);
    
    console.log(req.body);
    //res.send(objeto.musico)
    res.redirect('/musico-criado');

  },

  exibeFormularioCadastroMusico: (req, res) => {
    res.render('musico-criado'); 
  },

  exibeFormulariologinMusico: (req, res) => {
    res.render('login');
  },

  fazerLoginMusico: (req, res) => {
   
    const meuMusico = musico.findByEmail(req.body.email);
    
    if (!meuMusico) 
    return res.render('error-musico');

    const senhaEstaCorreta = bcrypt.compareSync(req.body.senha, meuMusico.senha);

    if (!senhaEstaCorreta) {
    return res.render('error-musico');
    }

    delete meuMusico.senha;
    req.session.musico = meuMusico;

    console.log(req.session)

    res.redirect('perfil-musico');
  },

exibeListaMusicos: (req, res) => {
  const musicos = musico.findAll();
  
  res.render('perfil-musico', {musicos: musicos});
},

exibeMusico: (req, res) => {
  const arquivo = fs.readFileSync(path.join(__dirname, '..', 'database', 'db.json'), {encoding: 'utf-8'});
  const objeto = JSON.parse(arquivo)
  const musicos = objeto.musicos;
  const musico = musicos.find(m => m.email === req.session.musico.email);

  console.log(musico);
  

  res.render('perfil-musico', {musicos: musico});
}

};

module.exports = musicosController;

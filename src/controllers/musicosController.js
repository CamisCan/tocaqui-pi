const fs =require('fs');
const path = require('path');
const bcrypt = require('bcrypt'); 

const { Musico } = require('../models');

const saltRounds = 10;

const musicosController = {
  cadastrar: async (req, res) => {
    const { nome_completo, cpf, nome_artistico, sobre_vc, email, data_nascimento, cidade, estado, estilo_musical, senha} = req.body;
    
    const hash = bcrypt.hashSync(senha, saltRounds);

    const novoMusico = await Musico.create({
      nome_completo: nome_completo,
      cpf: cpf,
      nome_artistico: nome_artistico,
      sobre_vc: sobre_vc,
      email: email,
      data_nascimento: data_nascimento,
      cidade: cidade,
      estado: estado,
      estilo_musical: estilo_musical,
      senha: hash,
    }).catch (console.log);

    res.send(novoMusico);
  },

  exibeFormularioCadastroMusico: (req, res) => {
    res.render('musico-criado'); 
  },

  exibeFormulariologinMusico: (req, res) => {
    res.render('login');
  },

  fazerLoginMusico: async (req, res) => {
    const { musico, senha } = req.body;
    const meuMusico = await musico.findByEmail({ where: { email: musico } });
    
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
  

  res.render('perfil-musico', { musicos: musico });
}

};

module.exports = musicosController;

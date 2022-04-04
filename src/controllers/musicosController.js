const fs =require('fs');
const path = require('path');
const bcrypt = require('bcrypt'); 

const { Musico } = require('../models')

const saltRounds = 10;

const musicosController = {
    cadastrar: async (req, res) => {
        const {nome_completo, nome_artistico, cpf, sobre_vc, foto_perfil, email, data_nascimento, cidade, estado, estilo_musical, senha } = req.body;

        const hash = bcrypt.hashSync(senha, saltRounds);
    
        const novoMusico = await Musico.create({
            nome_completo: nome_completo,
            nome_artistico: nome_artistico,
            cpf: cpf,
            sobre_vc: sobre_vc,
            foto_perfil: foto_perfil,
            email: email,
            data_nascimento: data_nascimento,
            cidade: cidade,
            estado: estado,
            estilo_musical: estilo_musical,
            senha: hash,
            eh_admin: false
        });
        
        res.send(novoMusico)

    },
    
    exibeFormularioCadastroMusico: (req, res) => {
        res.render('musico-criado'); 
    },

    exibeFormulariologinMusico: (req, res) => {
        res.render('login');
    },

    fazerLoginMusico: (req, res) => {
        const arquivo = fs.readFileSync(path.join(__dirname, '..', 'database', 'db.json'), {encoding: 'utf-8'});
        const objeto = JSON.parse(arquivo)

        const meuMusico = objeto.musicos.find(musico => musico.email == req.body.email)
        
        if (!meuMusico) 
        return res.render('error');

        const senhaEstaCorreta = bcrypt.compareSync(req.body.senha, meuMusico.senha)

        if (!senhaEstaCorreta) {
        return res.render('error');
        }

        delete meuMusico.senha;
        req.session.musico = meuMusico;

        console.log(req.session)

        res.redirect('perfil-musico')
    },
};

module.exports = musicosController;
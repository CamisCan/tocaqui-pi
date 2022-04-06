const fs =require('fs');
const path = require('path');
const bcrypt = require('bcrypt'); 

const { Musico } = require('../models')

const saltRounds = 10;

const musicosController = {
    cadastrar: async (req, res) => {
        try{
        const {nome_completo, nome_artistico, cpf, sobre_vc, email, data_nascimento, cidade, estado, estilo_musical, senha } = req.body;
        const foto_perfil = req.file.filename;
        const hash = bcrypt.hashSync(senha, saltRounds);


        const novoMusico = await Musico.create({
            nome_completo: nome_completo,
            nome_artistico: nome_artistico,
            cpf: cpf,
            foto_perfil: foto_perfil,
            sobre_vc: sobre_vc,
            email: email,
            data_nascimento: data_nascimento,
            cidade: cidade,
            estado: estado,
            estilo_musical: estilo_musical,
            senha: hash,
        });

        res.send(novoMusico);
    } catch (error){
        console.error(error)
    }

    },
    
    exibeFormularioCadastroMusico: (req, res) => {
        res.render('musico-criado'); 
    },

    exibeFormulariologinMusico: (req, res) => {
        res.render('login');
    },

    fazerLoginMusico: async (req, res) => {
        const { musico, senha } = req.body;

        const meuMusico = await Musico.findOne({ where: {  email: musico } });

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
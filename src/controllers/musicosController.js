const fs =require('fs');
const path = require('path');
const bcrypt = require('bcrypt'); 

const { Usuario, Musico, Endereco, } = require('../models');

const saltRounds = 10;

const musicosController = {
    cadastrar: async (req, res) => {
        try{
        const {
            nome_completo, 
            nome_artistico, 
            cpf, 
            sobre_vc, 
            email, 
            data_nascimento, 
            cidade, 
            estilo_musical, 
            senha, 
            uf, 
        } = req.body;

        const foto_perfil = req.file.filename;
        const hash = bcrypt.hashSync(senha, saltRounds);


        const novoMusico = await Usuario.create({
            musico: {
                nome_completo: nome_completo,
                nome_artistico: nome_artistico, 
                cpf: cpf,
                sobre_vc: sobre_vc,
                data_nascimento: data_nascimento,
                estilo_musical: estilo_musical,
                enderecos: [{
                    cidade: cidade,
                    uf: uf,
                }],
            },
            foto_perfil: foto_perfil,
            email: email,
            senha: hash,
        },{
            include: [{
                association: 'musico', 
                include: ['enderecos'],
            }]
        });
        
        res.render('musico-criado');
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
        try {
        const { email, senha } = req.body;

        const meuMusico = await Usuario.findOne({ where: { email } }
        ,{
            include: [{
                association: 'musico', 
            }]
        });

        if (!meuMusico) 
        return res.render('error');

        const senhaEstaCorreta = bcrypt.compareSync(senha, meuMusico.senha)

        if (!senhaEstaCorreta) {
        return res.render('error');
        }

        delete meuMusico.senha;
        req.session.musico = meuMusico;

        console.log(req.session)
        console.log(meuMusico)

        res.render('perfil-musico', { musico: meuMusico });
    } catch (erro){
        console.trace(erro)
        res.send(erro)
    }
    },
};

module.exports = musicosController;
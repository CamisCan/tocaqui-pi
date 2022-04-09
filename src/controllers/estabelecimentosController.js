const fs =require('fs');
const path = require('path');
const bcrypt = require('bcrypt'); 

const { Estabelecimento } = require('../models');
const usuario = require('../models/usuario');

const saltRounds = 10;

const estabelecimentosController = {
    cadastrar: async (req, res) => {
        try{
        const {razao_social, cnpj, nome_fantasia, sobre_seu_negocio, responsavel, email, tel, site, cidade, estado, senha } = req.body;
        const foto_perfil = req.file.filename;
        const hash = bcrypt.hashSync(senha, saltRounds);
    
        const novoEstabelecimento = await Estabelecimento.create({
            razao_social: razao_social,
            cnpj: cnpj,
            foto_perfil: foto_perfil,
            nome_fantasia: nome_fantasia,
            sobre_seu_negocio: sobre_seu_negocio,
            responsavel: responsavel,
            email: email,
            tel: tel,
            site: site, 
            cidade: cidade,
            estado: estado, 
            senha: hash,

        },{
            include: ['usuarios']
        });


        res.send(novoEstabelecimento);
    } catch (error){
        console.error(error)
    }
    },

    exibeFormularioCadastroEstabelecimento: (req, res) => {
        res.render('estabelecimento-criado');
    },

    exibeFormulariologinEstabelecimento: (req, res) => {
        res.render('login');
    },

    fazerLoginEstabelecimento: async (req, res) => {
        const { estabelecimento, senha } = req.body;

        const meuEstabelecimento = await Estabelecimento.findOne({ where: { email: estabelecimento } });
        
        if (!meuEstabelecimento) 
        return res.render('error');

        const senhaEstaCorreta = bcrypt.compareSync(req.body.senha, meuEstabelecimento.senha)

        if (!senhaEstaCorreta) {
        return res.render('error');
        }

        delete meuEstabelecimento.senha;
        req.session.estabelecimento = meuEstabelecimento;

        console.log(req.session)

        res.redirect('perfil-estabelecimento')
    }
};

module.exports = estabelecimentosController;
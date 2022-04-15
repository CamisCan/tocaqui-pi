const fs =require('fs');
const path = require('path');
const bcrypt = require('bcrypt'); 

const { Usuario, Estabelecimento, Telefone, Endereco } = require('../models');


const saltRounds = 10;

const estabelecimentosController = {
    cadastrar: async (req, res) => {
        
        const {razao_social, cnpj, nome_fantasia, sobre_seu_negocio, responsavel, email, tel, site, cidade, uf, senha } = req.body;
        const foto_perfil = req.file.filename;
        const hash = bcrypt.hashSync(senha, saltRounds);
    
        const novoEstabelecimento = await Usuario.create({
                estabelecimento:{
                razao_social: razao_social,
                cnpj: cnpj,            
                nome_fantasia: nome_fantasia,
                sobre_seu_negocio: sobre_seu_negocio,
                responsavel: responsavel,
                site: site,
                enderecos:[{
                    cidade: cidade,
                    uf: uf,
                }],
                telefones:[{
                    telefone: tel,
                }],
            },
            foto_perfil: foto_perfil,
            email: email,
            senha: hash,
        },{
            include: [{
                association:'estabelecimento',
                include:['enderecos', 'telefones',]
            }],
        });


        res.render('estabelecimento-criado');
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
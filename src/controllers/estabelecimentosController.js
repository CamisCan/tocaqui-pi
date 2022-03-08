const fs =require('fs');
const path = require('path');
const bcrypt = require('bcrypt'); 

const router = require('../routes/estabelecimentos.routes');

const estabelecimentosController = {
    cadastrar: (req, res) => {
        const saltRounds = 10;
        const arquivo = fs.readFileSync(path.join(__dirname, '..', 'database', 'db.json'), {encoding: 'utf-8'});
        const objeto = JSON.parse(arquivo)

        const hash = bcrypt.hashSync(req.body.senha, saltRounds);
    
        const novoEstabelecimento = {
            razao_social: req.body.razao_social,
            cnpj: req.body.cnpj,
            nome_fantasia: req.body.nome_fantasia,
            sobre_esta: req.body.sobre_esta,
            responsavel: req.body.responsavel,
            email: req.body.email,
            tel: req.body.tel,
            site: req.body.site,
            cidade: req.body.cidade,
            estado: req.body.estado,
            senha: hash,
            eh_admin: false
        }
    
        objeto.estabelecimentos.push(novoEstabelecimento);
        const objetoEmString = JSON.stringify(objeto);
    
        fs.writeFileSync(path.join(__dirname, '..', 'database', 'db.json'), objetoEmString);
    
        console.log(req.body)
        res.send(objeto.estabelecimento)
    },
    exibeFormularioCadastroEstabelecimento: (req, res) => {
        res.render('estabelecimento-criado');
    },

    exibeFormulariologinEstabelecimento: (req, res) => {
        res.render('login');
    },

    fazerLoginEstabelecimento: (req, res) => {
        const arquivo = fs.readFileSync(path.join(__dirname, '..', 'database', 'db.json'), {encoding: 'utf-8'});
        const objeto = JSON.parse(arquivo)

        const meuEstabelecimento = objeto.estabelecimentos.find(estabelecimento => estabelecimento.email == req.body.email)
        
        if (!meuEstabelecimento) 
        return res.render('error-estabelecimento');

        const senhaEstaCorreta = bcrypt.compareSync(req.body.senha, meuEstabelecimento.senha)

        if (!senhaEstaCorreta) {
        return res.render('error-estabelecimento');
        }

        delete meuEstabelecimento.senha;
        req.session.estabelecimento = meuEstabelecimento;

        console.log(req.session)

        res.redirect('perfil-estabelecimento')
    }
};

module.exports = estabelecimentosController;
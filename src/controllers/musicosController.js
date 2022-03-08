const fs =require('fs');
const path = require('path');
const bcrypt = require('bcrypt'); 

const router = require('../routes/musicos.routes');

const musicosController = {
    cadastrar: (req, res) => {
        const saltRounds = 10;
        const arquivo = fs.readFileSync(path.join(__dirname, '..', 'database', 'db.json'), {encoding: 'utf-8'});
        const objeto = JSON.parse(arquivo)

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
            eh_admin: false
        }
    
        objeto.musicos.push(novoMusico);
        const objetoEmString = JSON.stringify(objeto);
    
        fs.writeFileSync(path.join(__dirname, '..', 'database', 'db.json'), objetoEmString);
    
        console.log(req.body)
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
        const arquivo = fs.readFileSync(path.join(__dirname, '..', 'database', 'db.json'), {encoding: 'utf-8'});
        const objeto = JSON.parse(arquivo)

        const meuMusico = objeto.musicos.find(musico => musico.email == req.body.email)
        
        if (!meuMusico) 
        return res.render('error-musico');

        const senhaEstaCorreta = bcrypt.compareSync(req.body.senha, meuMusico.senha)

        if (!senhaEstaCorreta) {
        return res.render('error-musico');
        }

        delete meuMusico.senha;
        req.session.musico = meuMusico;

        console.log(req.session)
 
        res.redirect('perfil-musico');
    },

exibeListaMusicos: (req, res) => {
    const arquivo = fs.readFileSync(path.join(__dirname, '..', 'database', 'db.json'), {encoding: 'utf-8'});
    const objeto = JSON.parse(arquivo)
    const musico = objeto.musicos;

    res.render('/perfil-musico', {musicos: musico});
}

};

module.exports = musicosController;
const fs =require('fs');
const path = require('path');
const bcrypt = require('bcrypt'); 

const { Mensagem } = require('../models');

const saltRounds = 10;

const mensagensController = {
    cadastrar: async (req, res) => {
        try{
        const {
            mensagem
        } = req.body;


        const novaMensagem = await Mensagem.create({
            mensagem: {
                mensagem: mensagem,
            },
            include: [{
                association: 'musico', 
            }]
        });
        
        res.send('mensagem enviada');
    } catch (error){
        console.error(error)
    }
    },
};

module.exports = mensagensController;
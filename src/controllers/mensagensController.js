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

        await Mensagem.create({
            mensagem
        });
        
        res.send('mensagem enviada');
    } catch (error){
        console.error(error)
    }
    },
};

module.exports = mensagensController;
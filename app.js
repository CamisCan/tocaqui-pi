const path = require('path');
const express = require('express');
const session = require('express-session');

const baseRoutes = require('./src/routes/initial.routes');
const initialsRoutes = require('./src/routes/initial.routes');
const musicosRoutes = require('./src/routes/musicos.routes');
const estabelecimentosRoutes = require('./src/routes/estabelecimentos.routes');

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './src/views'));
app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: 'SENHA',
    resave: false, 
    saveUninitialized: false,
    cookie: { 
        secure: false
    }
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(baseRoutes);

app.use('/', initialsRoutes); 
app.use('/musico', musicosRoutes);
app.use('/estabelecimento', estabelecimentosRoutes)

app.listen(3000, () => console.log('Servidor rodando!'));
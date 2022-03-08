function estabelecimentoEstaLogado(req, res, next) {
    if (typeof req.session.estabelecimento == 'underfine') {
    return res.redirect('estabelecimento/login');
    }
    next();
}
   
module.exports = estabelecimentoEstaLogado;
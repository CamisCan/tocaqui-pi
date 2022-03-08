function musicoEstaLogado(req, res, next) {
    if (typeof req.session.musico == 'underfine') {
    return res.redirect('musico/login');
    }
    next();
}
   
module.exports = musicoEstaLogado; 
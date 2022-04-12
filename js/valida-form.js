const formSubmit = document.querySelector('body > form');
const inputUser = document.querySelector('#musico');
const inputPassword = document.querySelector('#senha');

formSubmit.addEventListener('submit', (e) => {
    const valorMusico = inputUser.value;
    const valorSenha = inputPassword.value;

    if(valorMusico.lenght < 1) {
        alert('Ops...Você esqueceu de preencher o email');
        e.preventDefault();
    }

    if(valorSenha.lenght < 8) {
        alert('Ops...A a sua senha precisa ter até 8 caracteres');
        e.preventDefault();
    }
})
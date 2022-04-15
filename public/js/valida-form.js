const formLogin = document.querySelector('#login_musico');
const formCadastro = document.querySelector('#cadastro_musico');
const inputSenha = document.querySelector('#senha');
const inputEmail = document.querySelector('#email');

console.log(formLogin);

formLogin.addEventListener('submit', (e) => {
    const valorMusico = inputEmail.value;
    console.log(valorMusico.lenght, "valor musico");

    const valorSenha = inputSenha.value;
    console.log(valorSenha.lenght, "valor senha");

    if(!valorMusico || valorMusico.lenght < 1) {
        alert('Ops...Você esqueceu de preencher o email');
        e.preventDefault();
    }

    if(!valorSenha || valorSenha.lenght < 8) {
        alert('Ops...A a sua senha precisa ter até 8 caracteres');
        e.preventDefault();
    }
})
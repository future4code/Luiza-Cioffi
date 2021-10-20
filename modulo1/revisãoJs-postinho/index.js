
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// // a-)Comparador de desigualdade a!==b 
// // Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 2));

// // b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//     return `No comparador de igualdade ${a} === ${b} é ${a === b}`
// }
// console.log(checarIgualdade(4, 3))

// // c-)Faça uma função chamada "verificaSeEMaior"
// function verificaSeEMaior(a, b) {
//     return a > b
// }
// console.log(verificaSeEMaior(321, 2156));

// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true 
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// // Exercício 3------------------------------------------------------------------------------------

// const cadastro = () => {
//     const anoAtual = 2021
//     const usuario = []
//     const nomeDoUsuario = prompt("Digite seu nome:")
//     const anoDeNascimento = Number(prompt("Digite o ano em que você nasceu:"))
//     const senhaDoUsuario = prompt("Digite uma senha com 6 caracteres ou mais:")
//     const nacionalidade = prompt("Digite em que país você nasceu:").toLowerCase()
        
//     if (((anoAtual - anoDeNascimento) >= 18) && (senhaDoUsuario.length >= 6) && (nacionalidade === "brasil")){
//         usuario.push(nomeDoUsuario)
//         usuario.push(anoDeNascimento)
//         usuario.push(senhaDoUsuario)
//         usuario.push(nacionalidade)
//         return `Cadastro de ${nomeDoUsuario} efetuado com sucesso!`
//     }else{
//         return `Não foi possível realizar o cadastro. Tente novamente`
//     }
// }
// console.log(cadastro());

// // Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    const solitaSenha = prompt("Olá, digite sua senha para efetuar o login")
    switch(solitaSenha){
        case login:
            return "Usuário Logado"
            break;
        default:
            return "Senha Inválida"
            break    
    }
}

console.log(login());

// // Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = () => {

//     //  Sua lógica aqui


// }
// console.log(primeiraDose())


// // LOOP+CONDICIONAL

// // Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui


// }
// console.log(segundaDose("Barbara"));

// // Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui

// }
// console.log(avisoAosAtrasados());


// // DESAFIO------------------------------------------------------------------------------------------

// const usuarios = [
//     {
//         nome: "Artur",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "pfizer",
//         imunizacao: "incompleta"
//     },
//     {
//         nome: "Bárbara",
//         ano: 1984,
//         nacionalidae: "brasileira",
//         senha: "labenu",
//         vacina: "astrazenica",
//         imunizacao: "completa"
//     },
//     {
//         nome: "Carlos",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "coronavac",
//         imunizacao: "incompleta"
//     }

// ]

// const cadastro = () => {
//     //  Sua lógica aqui
// }
// console.log(cadastro());

// const login = () => {
//     //  Sua lógica aqui
// }
// console.log(login());

// const primeiraDose = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDose())
// const segundaDose = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDose("ALGUM NOME AQUI"));

// const avisoAosAtrasados = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasados())
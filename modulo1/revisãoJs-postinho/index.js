
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

// const login = () => {
//     const login = "labenu"
//     const solitaSenha = prompt("Olá, digite sua senha para efetuar o login")
//     switch(solitaSenha){
//         case login:
//             return "Usuário Logado"
//             break;
//         default:
//             return "Senha Inválida"
//             break    
//     }
// }

// console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {
    let tempo, data = new Date()
    const nome = prompt("Digite seu nome")
    const vacina = prompt("Digite qual vacina você tomou:").toLowerCase()

    if (vacina === "astrazeneca") {
        tempo = 90
        return tempo
    }else if (vacina === "pfizer"){
        tempo = 90 
    }else if (vacina === "coronavac"){
        tempo = 28
    }

    const milissegundos1dia = 86400000

    const hoje = data.getTime()
    console.log("Hoje getTime(): " + hoje)

    const dataAtualizada = new Date(hoje + (tempo * milissegundos1dia))
    console.log("Data atualizada: " + dataAtualizada)

    const dataFormatada = dataAtualizada.toLocaleDateString("pt-br")

    return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto de saúde na data ${dataFormatada}.`

}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    for (let usuario of usuarios){
        if( usuario.nome === nomeDoUsuario) {
            usuario.imunizacao = "completa"
            return usuarios
        }
    }    
}
console.log(segundaDose("Barbara"));

//----------------------------------------------------
//  --------- IGNORAR (RASCUNHOS DO PLANTÃO) --------
// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]


//     const acheiPessoa = usuarios.map(()=>{
//         if(acheiPessoa.nome === nomeDoUsuario){
            
//         }
//         return pessoa
//     })
//     console.log(acheiPessoa)

// const nomePessoa = "Bárbara"
// segundaDose(nomePessoa)
// ---------------------------------------------------------

// Exercício 7 --------------------------------------------------------------------------------------

let avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    const pessoaDeInteresse = usuarios.filter((pessoa)=>{
        if(pessoa.imunizacao === "incompleta"){
            return true
        }
    }).map((pessoa)=>{
        console.log(`Olá ${pessoa.nome}! Sua imunização está ${pessoa.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
    })

}
console.log(avisoAosAtrasados());


// // DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }
]

// // 3

// const cadastro = () => {
//     const anoAtual = 2021
//     const nomeDoUsuario = prompt("Digite seu nome:")
//     const anoDeNascimento = Number(prompt("Digite o ano em que você nasceu:"))
//     const senhaDoUsuario = prompt("Digite uma senha com 6 caracteres ou mais:")
//     const nacionalidade = prompt("Digite em que país você nasceu:").toLowerCase()
        
//     if (((anoAtual - anoDeNascimento) >= 18) && (senhaDoUsuario.length >= 6) && (nacionalidade === "brasil")){
//         const novoUsuario = {nome: nomeDoUsuario, ano: anoDeNascimento, nacionalidade: nacionalidade, senha: senhaDoUsuario}
//         usuarios.push(novoUsuario)
//         return `Cadastro de ${nomeDoUsuario} efetuado com sucesso!`
//     }else{
//         return `Não foi possível realizar o cadastro. Tente novamente`
//     }
// }
// console.log(cadastro());

// // 4

// console.log(usuarios)

// function login() {
//     const solicitaSenha = prompt("Olá, digite sua senha para efetuar o login")
   
//     for (let usuario of usuarios){
//         if( usuario.senha === solicitaSenha) {
//             return usuarios, "Usuário logado com sucesso!"
//         }
//     }
//     return "Não foi possível efetuar o login"
// }  
// console.log(login())


// // 5

// const primeiraDose = () => {
//     let tempo, data = new Date()
//     const nome = prompt("Digite seu nome")
//     const vacina = prompt("Digite qual vacina você tomou:").toLowerCase()

//     if (vacina === "astrazeneca") {
//         tempo = 90
//         return tempo
//     }else if (vacina === "pfizer"){
//         tempo = 90 
//     }else if (vacina === "coronavac"){
//         tempo = 28
//     }

//     const milissegundos1dia = 86400000

//     const hoje = data.getTime()
//     console.log("Hoje getTime(): " + hoje)

//     const dataAtualizada = new Date(hoje + (tempo * milissegundos1dia))
//     console.log("Data atualizada: " + dataAtualizada)

//     const dataFormatada = dataAtualizada.toLocaleDateString("pt-br")

//     return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto de saúde na data ${dataFormatada}.`

// }
// console.log(primeiraDose())

// // 6

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]
//     for (let usuario of usuarios){
//         if( usuario.nome === nomeDoUsuario) {
//             usuario.imunizacao = "completa"
//             return usuarios
//         }
//     }    
// }
// console.log(segundaDose("Barbara"));

// // 7 

// let avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     const pessoaDeInteresse = usuarios.filter((pessoa)=>{
//         if(pessoa.imunizacao === "incompleta"){
//             return true
//         }
//     }).map((pessoa)=>{
//         console.log(`Olá ${pessoa.nome}! Sua imunização está ${pessoa.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
//     })

// }
// console.log(avisoAosAtrasados());
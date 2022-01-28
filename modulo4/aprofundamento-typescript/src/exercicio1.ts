// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

// a) const minhaString:string = 9
// Automaticamente aparece a marcação de erro e noa do erro ("O tipo 'number' não pode ser atribuído ao tipo 'string'.")

// b) const minhaString:number | string = "nove" + 9
// Preciso fazer uma union type, indicando que a variável pode receber tanto number, quanto string

// c) 
type Pessoa = {nome: string, idade: number, corFavorita: string}

const pessoa1:Pessoa = {
    nome: "Maria",
    idade: 50,
    corFavorita: "amarelo" 
} 

const pessoa2:Pessoa = {
    nome: "Mariana",
    idade: 30,
    corFavorita: "azul" 
} 

const pessoa3:Pessoa = {
    nome: "Marianinha",
    idade: 10,
    corFavorita: "rosa" 
} 


// d) 

enum cores {
    AZL = 'azul',
    VRM = 'vermelho',
    AMR = 'amarelo',
    VRD = 'verde',
    RXO = 'roxo',
    LRNJ = 'laranja',
    RSA = 'rosa'
}

type PessoaD = {nome: string, idade: number, corFavorita: cores}

const pessoa4:Pessoa = {
    nome: "Maria",
    idade: 50,
    corFavorita: cores.AMR 
} 

const pessoa5:Pessoa = {
    nome: "Mariana",
    idade: 30,
    corFavorita: cores.AZL 
} 

const pessoa6:Pessoa = {
    nome: "Marianinha",
    idade: 10,
    corFavorita: cores.RSA 
} 

console.log(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6)
//Exercício de interpretação de código
//1.
/*
10
10 5
*/
//2.
/*
10 10 10
*/
//3.
/*
p -> horasTrab
t -> salarioDia
*/

// Exercício de escrita de código
// 1.a)
/*
let nome
*/
//1.b)
/*
let idade
*/
//1.c)
/*
console.log (typeof nome)
console.log (typeof idade)
*/
//1.d)
/*
Ambas apareceram como string (texto) e isso ocorre porque tudo o que um 
usuário poderá inserir será considerado string a princípio, a menos que 
seja identificado como número pelo programador.
*/
//1.e)
/*
const nome = prompt("Olá, qual o seu nome?")
const idade = prompt("E quantos anos você tem?")
console.log (typeof nome)
console.log (typeof idade)
*/
//1.f) 
/*
Elas continuam aparecendo como string, acredito que pelo mesmo motivo, 
mesmo eu tendo alterado de let para const.*/
//1.g)
/*
console.log ("Olá,", nome, ", você tem", idade, "anos.")
*/

//2.a)
/*
let olhos = prompt("Você tem olhos castanhos?")
let cabelos = prompt("Você tem cabelos pretos?")
let cachorro = prompt("Você tem um ou mais cachorros em casa")
*/
//2.b)
/*
console.log ("Você tem olhos castanhos? -", olhos)
console.log ("Você tem cabelos pretos? -", cabelos)
console.log ("Você tem um ou mais cachorros em casa? -", cachorro)
*/

//3
/*
let a = 10
let b = 25
let c = a

a = b
b = c

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b) 
*/

//DESAFIO
/*
let primNumTexto = prompt("Escreva um número inteiro")
let segNumTexto = prompt("escreva outro número inteiro")
const primNumNumero = Number (primNumTexto)
const segNumNumero = Number (segNumTexto)
let x = primNumNumero + segNumNumero 
let y = primNumNumero * segNumNumero

console.log ("O primeiro número somado ao segundo número resulta em:", x)
console.log ("O primeiro número multiplicado pelo segundo número resulta em:", y)
*/
//Exercícios de interpretação de código
// 1.
//a. false 
//b. false
//c. true
//d. boolean
// 2.
/* Entendi que existe um erro de escrita e outro erro de variável.
O erro de escrita está em fazer a soma direto com a variável, que poderá 
ser lida como string. Dessa forma não haverá soma e, em seu lugar,ficarão
os dois números em sequência. é necessária a conversão de string para number
antes de realizar a soma
Sobre o tipo de variáveis utilizadas, entendi que seria melhor usar const 
nas duas primeiras, já que elas serão constantes para aquele bloco, e usar
let na soma, pois ela pode sre alterada.*/
//3.
/* const primeiroNumero = prompt("Digite um numero!")
const segundoNumero = prompt("Digite outro numero!")
let primeiroNumeroNumber = Number (primeiroNumero)
let segundoNumeroNumber = Number (segundoNumero)
let soma = primeiroNumeroNumber + segundoNumeroNumber

console.log(soma)*/


//Exercícios de escrita de código
//1.
/*const idadeUsuario = prompt("Olá, qual a sua idade?")
const idadeAmigue = prompt("E qual a idade de sue melhor amigue?")
let resultado = (Number (idadeUsuario)) > (Number (idadeAmigue))
let diferença = (Number (idadeUsuario)) - (Number (idadeAmigue))

console.log("Sua idade é maior do que a do seu melhor amigo? -", resultado)
console.log(diferença)*/

//2.
// a.
// const numeroPar = prompt("Por favor, insira um número par:")
// b.
// let restoNumeroPar = (Number (numeroPar)) % 2
// console.log(restoNumeroPar)
// c. 
/*Todos os resultados dão zero, provando que o número colocado é par 
(pois é divísivel por 2)*/
//d.
/*Ao colocar um número ímpar, o resultado é alterado para um, poi números ímpares
sempre deixam resto 1 quando divididos por 2.*/

//3.
/*const idade = prompt("Olá, qual a sua idade em anos?")
let meses = (Number (idade)) * 12
let dias = (Number (idade)) * 365
let horas = dias * 24

console.log(meses)
console.log(dias)
console.log(horas)*/

//4.
// const primeiroNumero = prompt("Digite um numero!")
// const segundoNumero = prompt("Agora digite outro numero!")

// let maior = (Number (primeiroNumero)) > (Number (segundoNumero))
// console.log("O primeiro numero é maior que segundo? -", maior)

// let igual = (Number (primeiroNumero)) === (Number (segundoNumero))
// console.log("O primeiro numero e igual ao segundo? -", igual)

// let divisivelPrim = ((Number (primeiroNumero)) % (Number (segundoNumero))) === 0
// console.log("O primeiro numero é divisível pelo segundo? -", divisivelPrim)

// let divisivelSeg = ((Number (segundoNumero)) % (Number (primeiroNumero))) === 0
// console.log("O segundo numero é divisível pelo primeiro? -", divisivelSeg)


//DESAFIO
//Graus Fahrenheit(°F) para Kelvin(K)
//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

//Graus Celsius(°C) para Graus Fahrenheit (°F)
//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

// Calcule e mostre o valor de 77°F em  K, 
//mostrando a unidade no console também.
const setentaFParaK = ((77-32) * (5 / 9) + 237.15)
console.log(setentaFParaK, "K")

// Calcule e mostre o valor de 80°C em °F, 
//mostrando a unidade no console também
const oitentaCParaF = (80 * (9 / 5) + 32)
console.log(oitentaCParaF, "°F")

// Calcule e mostre o valor de 30°C em °F e K, 
//mostrando as unidades no console também
const trintaCparaF = 30 * (9 / 5) + 32
const trintaCparaK = (Number (trintaCparaF) - 32) * (5 / 9) + 237.15
console.log(trintaCparaF, "°F, e", trintaCparaK, "K")

// Altere o último item para que o usuário insira o 
//valor em graus Celsius que ele deseja converter
const celsiusUsuario = prompt("Digite a temperatura em graus Celsius:")
let fahrenheitUsuario = Number (celsiusUsuario) * (9 / 5) + 32
let kelvinUsuario = (Number (fahrenheitUsuario) - 32) * (5 / 9) + 237.15
console.log(celsiusUsuario, "°C é o mesmo que", fahrenheitUsuario, "°F, e o mesmo que", kelvinUsuario, "K.")

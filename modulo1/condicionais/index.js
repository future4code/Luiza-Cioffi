//Exercícios de interpretação de código
//1.a)
// Este código testa se o número digitado é par 
// (passou no teste) ou se é ímpar (não passou no teste)
// b) Números pares, quando o resto da divisão por 2 é 0
// c) Números ímpares, quando o resto da divisão for 
// diferente de 0

// 2.a) para determinar qual o valor da fruta escolhida 
// pelo cliente através do prompt
// b) O preço da fruta Maçã é R$ 2.25
// c) Tive que testar para ter saber, mas aparece o valor
// do default como se ele fosse até o fim do bloco e fizesse
// a ultima leitura possível

// 3.a) A primeira linha está criando uma variável (numero) a
// partir de um prompt, ou seja, de um dado digitado pelo usuário
// e envelopando essa resposta para que ela seja lida como 
// Number e não como String
// b) Se ele digitar 10, aparece "Esse número passou no teste",
// e se ele digitar -10, aparece "Essa mensagem é secreta!!!" 
// (rodei para testar e com -10 apareceu um erro, mas eu não entendi 
// como seria a escrita certa)
// c) sim, teve o erro para o número negativo. Acho que se foi
// usado o if, então deveria ser utilizado também o else para fechar
// esse bloco e daí associar a mensagem ao else.
// segue abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// } else {
// 	console.log("Essa mensagem é secreta!!!")
// }

//Exercícios de escrita de código
//1. a), b) e c)
// const idade = Number(prompt("Olá, digite quantos você tem:"))
// if(idade >= 18) {
//   console.log("Você pode dirigir!")
// } else {
// 	console.log("Você não pode dirigir")
// }

//2.
// let periodo = (prompt("Olá! Em qual período você estuda? Digite M para Matutino, V para Vespertino ou N para Noturno:")).toUpperCase()
// if (periodo === 'V') {
//     console.log('Bom dia!')
// } else if (periodo === 'M') {
//     console.log('Boa tarde!')
// } else if (periodo === 'N') {
//     console.log('Boa noite!')
// } else {
//     console.log('Período não encontrado')
// }

// 3.
// let periodo = (prompt("Olá! Em qual período você estuda? Digite M para Matutino, V para Vespertino ou N para Noturno:"))
// switch (periodo.toUpperCase()) {
//     case "M":
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa tarde!")
//         break
//     case "N":
//         console.log("Boa Noite!")
//         break
// }

// 4.
// let genero = (prompt("Qual o gênero do filme que será exibido?").toUpperCase())
// let condicao1 = (genero === 'FANTASIA')
// let valorIngresso = Number(prompt("Qual o valor do ingresso para o filme?"))
// let condicao2 = (valorIngresso < 15)


// if (condicao1 && condicao2) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme")
// }



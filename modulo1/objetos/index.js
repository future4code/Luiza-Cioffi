//Exercícios de interpretação de código
//1.a) 
// Matheus Nachtergaele
// Virginia Cavendish
// {canal: "Globo", horario: "14h"}
//2.
//a)
// {nome: 'Juca', idade: 3, raca: 'SRD'}
// {nome: 'Juba', idade: 3, raca: 'SRD'}
// {nome: 'Jubo', idade: 3, raca: 'SRD'}

// b)
// ele copia as propriedades (chaves e valores) do objeto 
// imediatamente anterior

//3.
//a)
// false
// indefined

//b)
// Aparece undefined porque não foi definido nenhuma
// propriedade altura, portanto seu valor está indefinido
// 

//Exercícios de escrita de código
//1. 
// //a)
// const pessoa = {
// 	nome: "Luiza", 
// 	apelidos: [
// 		"Lu", "Luluca", "Luluzita"
// 		], 
//     }

// function chamarFrase(objeto) {
//     return `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`
// }

// console.log(chamarFrase(pessoa))

// //b)
// const pessoa2 = {
//     ...pessoa, apelidos: ["Luizete", "Lulu", "Lua"]
// }

// console.log(chamarFrase(pessoa2))


//2.
// //a)
// const primeiroProfisional = {
//     nome: "Polly",
//     idade: 26,
//     profissão: "confeiteira"
// }

// const segundoProfissional = {
//     nome: "Ana Carolina",
//     idade: 32,
//     profissão: "jornalista"
// }

// //b)
// function retornarArray(objeto) {
//     return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissão, objeto.profissão.length] 
// }

// //teste
// console.log(retornarArray(primeiroProfisional))

//3.
// //a)
// const carrinho = []
// //b)
// const fruta1 = {
//     nome: "melancia",
//     disponibilidade: true
// }
// const fruta2 = {
//     nome: "laranja",
//     disponibilidade: true
// }
// const fruta3 = {
//     nome: "banana",
//     disponibilidade: true
// }
// //c)
// function colocarNoCarrinho(objeto) {
//     carrinho.push(objeto)
// }
// //d
// colocarNoCarrinho(fruta1)
// colocarNoCarrinho(fruta2)
// colocarNoCarrinho(fruta3)

// console.log(carrinho)

//DESAFIOS
// 1.

// 2.
// 3.

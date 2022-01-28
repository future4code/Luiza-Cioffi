// 1.
// a) 
// Podemos acessar através do comando process.argv[x], onde x é igual à posição no array em que se encontra o parâmetro na linha de comando, lembrando que se a posição for 0 será sempre "node" e se for 1 será sempre a pasta onde se encontra o arquivo.

// b) 
const name = process.argv[2]
const age = process.argv[3]
console.log(`Olá, ${name}! Você tem ${ age } anos.`)

// c)
// const name = process.argv[2]
// const age = process.argv[3]
// const newAge = Number(age) + 7
// console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${newAge}`)
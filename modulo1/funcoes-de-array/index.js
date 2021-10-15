// //Exercícios de interpretação de código
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//  como ele não tem return, ele vai apenas mostrar no
// console os parâmetros selecionados.
// Eu rodei para ver como ficava e de fato oi o que ele fez,
// mas não entendi porque ficou da forma como ficou.

// 2. Ele tem return, portanto vai retornar no console log um 
// novo array, apenas com os nomes dos "usuários"
// Amanda Rangel
// Laís Petra
// Letícia Chijo

//3. Ele retorna um array de um item só, o objeto que
// não contém a palavra Chijo
//     [{ nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" }]

//Exercícios de escrita de código
//1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//a)
  const nomesDosDoguinhos = pets.map((doguinho, index, array) => {
     return doguinho.nome
  })
  
  console.log(nomesDosDoguinhos)

//b)
  const cachorrosSalsicha = pets.filter((doguinho, index, array) => {
     return doguinho.raca === "Salsicha"
  })
  
  console.log(cachorrosSalsicha)

//c)
// um novo array 
// que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

// [[ VOU ENVIAR O RESTANTE NO FINAL DE SEMANA ]]
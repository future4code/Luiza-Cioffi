// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Olá, escreva a altura do retângulo em cm:"))
  const largura = Number(prompt("Agora digite a largura do retângulo, também em cm, por favor:"))    
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Olá, escreva o ano atual:"))
  const anoNascimento = Number(prompt("E em que ano você nasceu?"))
  console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Olá, Qual é o seu nome?")
  const idade = Number(prompt("E quantos anos você tem?"))
  const email = prompt("Por favor, insira seu e-mail:")

  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const primeiraCor = prompt("Escreva sua cor favorita:")
  const segundaCor = prompt("Escreva a segunda cor favorita:")
  const terceiraCor = prompt("Escreva sua terceira cor favorita:")
  const cores = [primeiraCor, segundaCor, terceiraCor]
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
   const tamanho = array.length
   const ultimaPosicao = tamanho - 1
   return array[ultimaPosicao]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiraPosicao = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = primeiraPosicao
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
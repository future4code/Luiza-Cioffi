// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   const tamanhoArray = Number(array.length)
    return tamanhoArray
}
console.log(retornaTamanhoArray())

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();
}
console.log(retornaArrayInvertido())

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let arrayInicial = array 
    function compararNumeros (a, b) {
        return a - b;
      };
    return arrayInicial.sort(compararNumeros);    
}
console.log(retornaArrayOrdenado())

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const apenasPares = function(item) {
        return !(item % 2);
    }
    return array.filter(apenasPares)
}
console.log(retornaNumerosPares())

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const apenasPares2 = function(itemElevado) {
        return !(itemElevado % 2);
    }
    const paresParaElevar = array.filter(apenasPares2)
    const paresElevados = paresParaElevar.map(function(num){
        return num * num;
    })
    return paresElevados
}
console.log(retornaNumerosParesElevadosADois())

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const max = Math.max(...array);
    return max
}
console.log(retornaMaiorNumero())

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
    const Objeto = {
        maiorNumero: num3,
        maiorDivisivelPorMenor: booleano,
        diferenca: num4
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
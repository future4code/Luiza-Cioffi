// a) Entrada = array de números, saída = objeto com o maior número, o menor número e a média entre os números

function obterEstatisticas(numeros: Array<number>) {

    const numerosOrdenados: Array<number> = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([4, 5, 6]))


// b) let soma : number
// let num : number
// const estatisticas: {
//     maior: number;
//     menor: number;
//     media: number;
// }


// c)

type AmostraDeDados = {
    numeros : Array<number>, 
    obterEstatisticas: (numeros: Array<number>) => {
        maior: number,
        menor: number,
        media: number
    }
}
type Estoque = {
    nome: string,
    quantidade: number,
    valorUnitario: number | string
}

const estoqueAtual: Estoque[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

function listaOrdenada(estoque: Estoque[]): Estoque[] {
    const ajustaPreco = (preco :number): string => {
        const valorAjustado: string = preco.toFixed(2).replace('.', ',')
        return "R$ "+valorAjustado
    }

    estoque.forEach((produto) => {
        produto.valorUnitario = ajustaPreco(produto.valorUnitario as number)
    });

    const ordenacao: Estoque[] = estoque.sort(
        (a, b) => a.quantidade - b.quantidade
    );
    
    return ordenacao
}

console.log("RESPOSTA: Segue o estoque atualizado para preços em reais, pela ordem de quantidade de produtos disponíveis:", listaOrdenada(estoqueAtual))

type dadosClientes = {
    cliente: string,
    saldoTotal: number,
    debitos: Array<number>
}

const clientes: dadosClientes[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function emprestimos(retiradas: dadosClientes[]): dadosClientes[] {
    retiradas.forEach((cliente) => {
        const somaDebitos = cliente.debitos.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        cliente.saldoTotal -= somaDebitos;
        cliente.debitos = []
    });

    const devedores = retiradas.filter((dadosClientes) => dadosClientes.saldoTotal < 0);
    return devedores
}

console.log("RESPOSTA: Segue lista de clientes com potencial para contrair empréstimos:",emprestimos(clientes))

enum SETOR {
	MKT="marketing",
	VND="vendas",
	FIN="financeiro"
}

type colab = {
    nome: string,
    salário: number,
    setor: SETOR,
    presencial: boolean
}

const colabs: colab[] = [
	{ nome: "Marcos", salário: 2500, setor: SETOR.MKT, presencial: true },
	{ nome: "Maria" , salário: 1500, setor: SETOR.VND, presencial: false},
	{ nome: "Salete", salário: 2200, setor: SETOR.FIN, presencial: true},
	{ nome: "João", salário: 2800, setor: SETOR.MKT, presencial: false},
	{ nome: "Josué", salário: 5500, setor: SETOR.FIN, presencial: true},
	{ nome: "Natalia", salário: 4700, setor: SETOR.VND, presencial: true},
	{ nome: "Paola", salário: 3500, setor: SETOR.MKT, presencial: true }
]

function recebeColab(colabs: colab[]): colab[] {
    const filtrarPessoa = colabs.filter((colab) => {
      return colab.setor === SETOR.MKT && colab.presencial === true
    })
  return filtrarPessoa
}
  
console.log("RESPOSTA: Segue a lista dos colaboradores dos setor de Marketing que trabalham presencialmente:",recebeColab(colabs)) 
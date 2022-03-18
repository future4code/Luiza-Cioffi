enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type filme = {
    titulo: string,
    anoLancamento: number,
    genero: GENERO,
    pontuacao?: number
}

function catalogo(filme: filme): filme{
    return filme
}
  
console.log("RESPOSTA: Olá, estes são o dados do filme escolhido:", catalogo({titulo: "The Batman", anoLancamento: 2022, genero: GENERO.ACAO, pontuacao: 86})) 
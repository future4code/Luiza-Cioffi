function renovaCNH( dataNascimento: string, dataEmissaoCNH: string ): boolean | string {
    const dataAtual: number = new Date().getTime();
    
    const [diaNasc, mesNasc, anoNasc] = dataNascimento.split("/");
    const [diaCNH, mesCNH, anoCNH] = dataEmissaoCNH.split("/");
    
    const anoNascTimestamp: number = new Date(`${anoNasc}-${mesNasc}-${diaNasc}T00:00:00`).getTime();
    const dataDocTimestamp: number = new Date(`${anoCNH}-${mesCNH}-${diaCNH}T00:00:00`).getTime();
  
    const idade: number = dataAtual - anoNascTimestamp;
    const ultimaRenovacao: number = dataAtual - dataDocTimestamp;
    const umAnoEmTimestamp: number = 31556926000;

    if (idade <= 20 * umAnoEmTimestamp) {
        return ultimaRenovacao >= 5 * umAnoEmTimestamp ? true : false;
    } else if (idade >= 20 * umAnoEmTimestamp && idade <= 50 * umAnoEmTimestamp) {
        return ultimaRenovacao >= 10 * umAnoEmTimestamp ? true : false;
    } else if (idade >= 50 * umAnoEmTimestamp) {
        return ultimaRenovacao >= 15 * umAnoEmTimestamp ? true : false;
    } else {
        return "Ops, algo deu errado, verifique as datas enviadas e tente novamente";
    }
};

console.log("RESPOSTA: A CNH precisa ser renovada? ('false' para não precisa e 'true' para precisa):", renovaCNH("01/01/1985", "02/02/2017"))
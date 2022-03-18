const frase = (nome: string, dataNasc: string): string => {
    const idade = dataNasc.split("/")
    return `RESPOSTA: Olá me chamo ${nome}, nasci no dia ${idade[0]} do mês de ${idade[1]} do ano de ${idade[2]}` 
}
   
console.log(frase("Maria", "08/março/1980")) 
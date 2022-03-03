function anagramasPossiveis(palavra:string):number {
    const letras:number = palavra.length
    let anagramas = 1

    if (letras === 0){
        return 1;
    } else{    
        for (let i = letras; i>0; i--) {
            anagramas *= i
        } 
    }

    return anagramas
}

console.log("RESPOSTA: A quantidade de anagramas possíveis desta palavra é:", anagramasPossiveis("elogiar"))
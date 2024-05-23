function filtraOcorrencias (paragrafo){
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)
}

function montaArquivo(listaPalavras){
    let textoFinal = '';
    listaPalavras.forEach((paragrafo, indice) =>{
        const repetidas = filtraOcorrencias(paragrafo).join(', ');
        textoFinal += `Palavras repetidas no paragrafo ${indice}: ${repetidas}\n`
    })
    return textoFinal;
}

export { montaArquivo }
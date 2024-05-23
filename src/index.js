export function contaPalavras (texto){
	const paragrafos = extraiParagrafos(texto);
	const contagem = paragrafos.flatMap((paragrafo) =>{
		if(!paragrafo) return [];
		return verificacao(paragrafo);
	})
	return contagem;
}

function extraiParagrafos(texto){
	return texto.toLowerCase().split('\n');
}
/* Essa função entra no texto em string, transforma o texto em caixa baixa e separa
    por paragrafo, apos isso cria uma contagem dentro de cada paragrafo chamando a proxima
    função*/

function limpaTexto (palavra){
  return palavra.replace(/[.,\/#$%\^&\*;:[]=\-_`~()]/g, '');
}
/* Ao ser chamada pela função de cima ela entra dentro de cada paragrafo e separa as palavras
    e faz contagem de cada uma somando +1*/

function verificacao (texto) {  
  const lista = texto.split(' ');
  const resultado = {};
    // objeto[propriedade] = valor;
  lista.forEach(palavra => {
    if(palavra.length >= 3 ){
      const palavraOk = limpaTexto(palavra);
      resultado[palavraOk] = (resultado[palavraOk] || 0) + 1
    }
  })
  return(resultado);
} 

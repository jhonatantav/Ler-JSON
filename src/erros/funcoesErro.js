export default function trataErros(erro) {
    if(erro.code === 'ENOENT'){
        // throw new Error 
        return 'Arquivo não encontrado';
    }else{
        return 'Erro na aplicação';
    }
}

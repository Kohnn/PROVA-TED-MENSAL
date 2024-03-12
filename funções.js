
export function criarPilha(tamanho = 5 ){
    return[... new Array(tamanho)]
    }



export function inserirItem(pilha,livros){
   if (pilha.includes(undefined)){
    const index = pilha.findIndex(element=>element===undefined)
    pilha [index]= livros 
    console.log('$"')
   }
   else{
    
   }
        
        
    }

    export function removerTudo(pilha = []){
        for (let i = 0; i < pilha.length; i++) {
            console.log('${pilha[i].titulo}')
            
        }
    }



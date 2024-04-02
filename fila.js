const musicas = [
    {
        nome: "musica1",
    },
    {
        nome: "musica2",
    }
]

// Função criar fila com tamanho 10
function criarFila(tamanho=10){
    return [... new Array(tamanho)]
}
let minhaFila = criarFila() // "Linka" a fila com a função
console.log(minhaFila)

// Função inserir fila 
function inserirFila(fila, item){
    const posicao = fila.indexOf(undefined) // Pega qual a posição que aparece o undefined
    for (let i = 0; i < fila.length; i++) {
        if(fila[i] === undefined){ // Caso a posição esteja vazia, insere um valor
            fila[posicao] = item
            return
        }
    }
    console.log("Erro") // Caso não for, retorne um erro
}
inserirFila(minhaFila, "Isabelle")
inserirFila(minhaFila, "Alessandra")
inserirFila(minhaFila, "Isabella")
console.log(minhaFila)

// Função remover fila
function removerFila(fila){
    if(fila[0] === -1){ // Caso esteja undefined, a fila está vazia - não tem o que remover
        console.log("Fila Vazia")
    }
    let primeiro = fila[0] // Pega a primeira posição e retira, "puxando" a fila pra frente
    for (let i = 0; i < fila.length; i++) {
        fila[i] = fila[i+1]
        primeiro = fila[0]
    }
}
removerFila(minhaFila)
console.log(minhaFila)

// Função exvaziar fila
function esvaziarFila(fila){
    let segundo = fila[1] // Pega o segundo item
    for (let i = 1; i < fila.length; i++) { // Remove o segundo item pra frente
        while(fila[i] === undefined){
            segundo = fila[i+1]
        }
        
    }
}
removerFila(minhaFila)
console.log(minhaFila)


// Função para mostrar o tamanho da fila
function verTamanhoFila(fila){
    console.log(fila.length) // Puxa o tamanho da fila
}
verTamanhoFila(minhaFila)
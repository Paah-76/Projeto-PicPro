
const listaOpcoes = document.querySelector(".secaoDetalhesConta_opcoesTransacoes")

listaOpcoes.addEventListener("click", indentificarOpcoes)

function  indentificarOpcoes(event){
    const elemento = event.target
    if(elemento.tagName == "LI"){
        const id = elemento.id
        const secaoEscolha = document.querySelector(`div[data-id"${id}"]`)
        removerClasseMostrar()
        secaoEscolha.classLis.add("mostrar");
    }
}

function removeClasseMostrar(){
    const div = document.querySelectorAll(".secaoTransacao .container div")

    for(let i = 0; i< divs.length; i++){
        divs[i].classList.remove("mostrar");
    }
}


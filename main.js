const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const estatistica = document.querySelectorAll("[data-estatistica]");
console.log(estatistica);
const controle = document.querySelectorAll("[data-controle]");

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento)=>{
         manipulaDados(evento.target.dataset.controle , evento.target.parentNode)
         atualizaEstatistica(evento.target.dataset.peca)
    })
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = (parseInt(peca.value) -1)
    } else {
        peca.value = (parseInt(peca.value) +1)
    }
};

function atualizaEstatistica(peca){
    console.log(pecas[peca])

    estatistica.forEach( (elemento) => {
        console.log(elemento.textContent)
        console.log(elemento.dataset.estatistica)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
};

//VERCEL é interessante para postar as coisas
//Usa os . para entrar nas tags
//Data-attribute é interessante para marcar classes, invoque-o com []
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o pais conheicido por ter inventado o Sushi ?",
        alternativas: [
            {
                texto: "China.",
                afirmacao: ""
            },
            {
                texto: "Japão.",
                afirmacao: ""
            },
            {
                texto: "Coreia Do Sul.",
                afirmação:""
            },
            {
                texto:"Tailândia.",
                afirmacao:""
            }
        ]
    },
    {
        enunciado: "Qual é o principal idioma falado no Brasil ?",
        alternativas: [
            {
                texto: "Português.",
                afirmacao: ""
            },
            {
                texto: "Espanhol.",
                afirmacao: ""
            },
            {
                texto:"Inglês.",
                afirmacao:""
            },
            {
                texto:"Tupi.",
                afirmacao:""
            }
        ]
    },
    {
        enunciado: "Quais das seguintes cidades é famosa pelo Carnaval ?",
        alternativas: [
            {
                texto: "Buenos Aires.",
                afirmacao: ""
            },
            {
                texto: "Rio De Janeiro.",
                afirmacao: ""
            },
            {
                texto:"Texas.",
                afirmacao:""            
            },
            {
                texto:"Paris,",
                afirmacao:""
            }
        ]
    },
    {
        enunciado: "Qual é o nome da famosa torre inclinada localizada na cidade de Pisa, na Itália ?",
        alternativas: [
            {
                texto: "Torre De Londres.",
                afirmacao: ""
            },
            {
                texto: "Torre Eiffel.",
                afirmacao: ""
            },
            {
                texto:"Torre De Pisa.",
                afirmacao:""
            },
            {
                texto:"Torre De Belém.",
                afirmacao:""
            }
        ]
    },
    {
        enunciado: "Qual seleção nacional venceu a Copa do Mundo da FIFA mais vezes até 2022 ?",
        alternativas: [
            {
                texto: "Brasil.",
                afirmacao: ""
            },
            {
                texto: "Alemanha.",
                afirmacao: ""
            },
            {
                texto:"Itália.",
                afirmacao:""
            },
            {
                texto:"Argentina.",
                afirmacao:""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigado por responder, Tenha um Bom Dia !!!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
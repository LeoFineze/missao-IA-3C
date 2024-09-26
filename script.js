const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você gosta de futebol?",
        alternativas: [
            {
                texto: "Sim, eu gosto",
                afirmacao: [
                    "Que legal, você gosta mesmo de futebol",
                    "Que pena, parece que você não gosta de futebol"
                    ]
            },
            {
                texto: "Não,eu detesto",
                afirmacao: [
                    "Que pena, parece que você não gosta de futebol",
                    "Que legal, você gosta mesmo de futebol"
                    ]
            }           
            
        ]
    },
    {
        enunciado: "você gosta de correr?",
        alternativas: [
            {
                texto:"Sim, eu gosto",
                afirmacao: [
                    "que legal, você gosta de correr",
                    "Não, detesto correr"
                    ]
            },
            {
                texto: "Não, detesto correr",
                afirmacao: [
                    "que legal, você gosta de correr",
                    "afirmacao 2"
                    ]
            }
        ]
    },
    {
        enunciado: "Você gosta de playstation?",
        alternativas: [
            {
                texto:"Sim, é um ótimo console",
                afirmacao: [
                    "Que legal,eu concordo",
                    "Entendi, cada um tem sua preferência"
                    ]
            },
            {
                texto:"Não, eu prefiro outro console",
                afirmacao: [
                    "Que legal,eu concordo",
                    "Entendi, cada um tem sua preferência"
                    ]
            }
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

function aleatorio (lista)}
    const posicao = Math.floor(Math.random()* lista.lenght);
    return lista[posicao];
mostraPergunta();

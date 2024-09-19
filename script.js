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
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto:"Alternativa 1 da pergunta 3",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            },
            {
                texto:"Alternativa 2 da pergunta 3",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
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

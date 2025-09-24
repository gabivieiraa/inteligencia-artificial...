const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é natural do estado Paranaense?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "O Paraná é um estado brasileiro localizado na região Sul do país."
            },
            {
                texto: "Não!",
                afirmacao: "O Paraná é um dos 26 estados do Brasil, localizado na região Sul do país."
            }
        ]
    },
    {
        enunciado: "qual é a capital do paraná?",
        alternativas: [
            {
                texto: "Curitiba.",
                afirmacao: " Possui clima predominantemente subtropical úmido e um relevo planáltico, com as maiores elevações concentrando-se no leste do estado."
            },
            {
                texto: "Foz do Iguaçu.",
                afirmacao: " Com uma população de mais de 11 milhões de habitantes, é um dos estados mais populosos e economicamente importantes do país."
            }
        ]
    },
    {
        enunciado: "Qual o simbolo do estado?",
        alternativas: [
            {
                texto: "A Araucária.",
                afirmacao: "Sua economia é a quinta maior do país, destacando-se a indústria de transformação e a produção de grãos."
            },
            {
                texto: "A gralha azul.",
                afirmacao: "O Paraná possui uma paisagem diversificada, que inclui desde planícies litorâneas até áreas de planalto e montanhas."
            }
        ]
    },
    {
        enunciado: "O nome Paraná tem sua origem no tupi-guarani. O que ele significa?",
        alternativas: [
            {
                texto: "Semelhante ao mar.",
                afirmacao: "Alguns dos pratos tipicos do estado são o pinhão, barreado, entre outras."
            },
            {
                texto: "Terra da mata. ",
                afirmacao: "A cultura paranaense é uma rica mistura de tradições, influenciada por diversas ondas de imigração. "
            }
        ]
    },
    {
        enunciado: "Qual o principal rio do Paraná? ",
        alternativas: [
            {
                texto: "Rio Paraná",
                afirmacao: "Está localizado no Sul do país. Fazendo divisa com São Paulo, Santa catarina e Mato Grosso do Sul. "
            },
            {
                texto: "Rio Iguaçu.",
                afirmacao: "A cultura paranaense é uma rica mistura de tradições, influenciada por diversas ondas de imigração."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){
    if (atual >= perguntas.length){
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
    historiaFinal += afirmacoes +"" ;
    atual++;
    mostraPergunta();

}
function mostraResultado(){
    caixaPerguntas.textContent = "Resumo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta();

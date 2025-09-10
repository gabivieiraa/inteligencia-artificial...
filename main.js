const caixaPrincipal =document.querySelector(".caixa-principal");
const caixaPerguntas =document.querySelector(".caixa-perguntas");
const caixaAlternativas =document.querySelector(".caixa-alternativas");
const caixaResultado =document.querySelector(".caixa-resultado");
const textoResultado =document.querySelector(".texto-resultado");

const perguntas =[
{
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
        "alternativa 1",
        "alternativa 2",
    ]
    },
{
    enunciado: "pergunta 2",
    alternativas: [
      {
        texto:"Isso é assustador!",
        afirmacao:"afirmaçao"
        },

      {
        texto:"Isso é maravilhoso!",
        afirmacao:"afirmaçao"
       }
    ]
    },
    {
        enunciado:  "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    
        alternativas: [
            {
           texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
           afirmacao:"afirmaçao"
            },
            {
            texto:"Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
            afirmacao:"afirmaçao"
            },
        
        
        ]
        },
        {
            enunciado:   "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
            alternativas: [
                {
               texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao:"afirmaçao"
                },
                {
               texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
                afirmacao:"afirmaçao"
                },
            ]
            },
            {
                enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
                alternativas: [
                    {
                    texto:"Criar uma imagem utilizando uma plataforma de design como o Paint.",
                    afirmacao:"afirmaçao"
                    },
                    {
                    
                    texto:"Criar uma imagem utilizando um gerador de imagem de IA.",
                    afirmacao:"afirmaçao"
                    },
                ]
                },                    

];
let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativa();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas);
    const botaoAlternativa = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendCh1d(botaoAlternativas);

}

mostraPergunta();

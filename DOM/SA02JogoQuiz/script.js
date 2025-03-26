// DOM ==> jogo quiz interativo
let perguntas = [];
let proximaPergunta = 0;

//DOM -> elementos

let perguntaElement = document.getElementById("pergunta");
let opcoesElemnt = document.getElementById("opcoes");
let proximaElement = document.getElementById("proxima");
let respostaElement = document.getElementById("resposta");

//fetch -> pegar as perguntas do arquivo Json
fetch("perguntas.json")
     .then(response => response.json())
     .then(data => {
        perguntas = data;
        carregarPerguntas();
    })
//DOM --> funcoes
function carregarPerguntas(){}
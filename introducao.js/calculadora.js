// criar uma calculadora Simples em js
// importe da bblioteca
const prompt = require("prompt-sync")();

// funções - Operaçoes
//soma

function soma(a,b){
    return (a+b);

}

//subtração
function sub(a,b){
    return (a-b);
}

//multiplicação
function mult(a,b){
    return (a*b);
}

//divisão
function div(a,b){
    return (a/b);
}

// menu Operações
function menuOperacoes(){
    console.log("===Calculadora Simples===");
    console.log("| 1. Soma")
    console.log("| 2. Subtração")
    console.log("| 3. Multiplicação")
    console.log("| 4. Divisão")
    console.log("====================")
    let Operacao = prompt("Escolha a operação desejada: ");
}

    //consicional
    let numero1 = Number(prompt("Digite  n° 1: "));
    let numero2 = Number(prompt("Digite  n° 2: "));
     // entada dos numeros
     let resultado;
     switch (Operacao) {
        case "1":
            resultado = soma(numero1,numero2);
            break;
        case "2":
            resultado = sub(numero1,numero2)
            break;
        case "3":
            resultado = mult(numero1,numero2)
            break;
        case "4":
            if(numero2===0){
                console.log("Não dividira por Zero!!")
                resultado = null}
            else{
                resultado=div(numero1, numero2)
                break;
                }
        default:
            console.log("Operação invalida")
            break;
        }
    //fim do switch
    console.log ("Resultado: "+resultado);

//exucução do programa
var continuar = true;
while(continuar){
    menuOperacoes();
    let sair = prompt("1. Continuar |2. Sair")
    if (sair == "2"){
        continuar = false
        console.log("Saindo....");
    }
}
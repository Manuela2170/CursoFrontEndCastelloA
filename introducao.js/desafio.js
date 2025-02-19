//desafio 1
const prompt = require("prompt-sync")();

var idade = Number(prompt("Digite sua idade: "));
//condição
if (idade<18){
    console.log("Menor de idade");
} else if(Idade<60){
    console.log("Adulto");
} else if(idade>60){
    console.log("idoso")
}

//deafio 2 - Mult 5
var numero = 5;

for(let i = 0; i<=20; i++){
    console.log(numero+" X "+i+" = "+(numero*i))
}

//desafio 3 - pares

for(let i=1; i<=20; i++){
    if(i%2==0){
        console.log("N°"+i+" é Par")}
}
//Declaração de variaveis e constantes

let nome = "João"; //string
nome ="josé"; // retribuição de valor
//let nome = "pedro"  erro não posso redeclarar

var idade = 25; // numeric
//idade = 26; //retribuição de valor var
//var idade = 30; // redeclarar

const pi = 3.1415; //numeric
//PI = 1.20506; não pode reatribuir 

let teste = true; //boolean
var x = null; // NULL
 //underfined

console.log("nome: "+nome);
console.log("idade: "+idade);
console.log("pi: "+pi);

// =======================================================================================
// Operadores Aritméticos (+, -, *, /, %)
var a = 10;
var b = 3;
console.log("Soma: "+(a+b));            //13
console.log("Subtração: "+(a-b));       //7
console.log("Multiplicação: "+(a*b));   //30
console.log("Divisão: "+(a/b));         //3.333
console.log("Resto: "+(a%b));           //1

// operadores relacionais ()

var a = 10; // var numeric
var b = 20; // var numeric
var c = "10"; // var string

console.log("a>b: " +(a>b)); // comparacão maior
console.log("a==c: "+(a==c));
console.log("a===c"+(a===c));

// operacoes logicos (&&, ||)

var nota1 = 5;
var nota2 = 8;

console.log("Aprovação: " +(nota1 >7 && nota2>7)); //false
console.log("Aprovação: "+(nota1>7 || nota2>7)); //true
console.log(!true); //false
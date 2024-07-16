/* Javascript Básico*/

//Comentário Inline
/*Comentário Multiline*/

//Declaração, Reatribuição, Inicialização e Redeclaração do var:
var Nome; // Declaração 1
var Nome = 'Sérgio'; // Declaração 2
console.log(`${Nome}`);

//Declaração, Reatribuição e Redeclaração do let:
/*
let NomeSobrenome;
let NomeSobrenome = 'Paulo';//:erro: pois não pode redeclarar
console.log('Sobrenome')
*/

//Declaração, Reatribuição e Redeclaração do const:
//const π; :erro: pois tem que inicialzar;
const π = 3.14;


//Hoisting var
console.log(`Meu sobrenome ${SobreNome}`);
var SobreNome = 'Sérgio';//Undefined

//Hoisting let

//console.log(`Meu ultimo nome: ${UltimoNome}`)
//let UltimoNome = "Marques"; //Erro global dessa linha para baixo

//Hoisting const:
const PenultimoNome = "Silva"; //erro
console.log(`Meu ultimo nome: ${PenultimoNome}`);

//TIPOS DE VARIAVEL:

var idade = 2; //Number
var casado = false; //Boolean;
var pai = "Sérgio"; //String;
var vazio = null; //vazio;
var nao_declarado = undefined; //não declarado
const dados_pessoais = { //Object
    nome:'Paulo Sérgio',
    idade: 17,
    sexo: 'Masculino'
};

console.log(`Olá, ${dados_pessoais.nome}! Você tem ${dados_pessoais.idade} anos com o sexo ${dados_pessoais.sexo}.`);

//VARIÁVEL GLOBAL:
var VariavelGlobal = "Eu sou global!"
function global(){
    console.log(`${VariavelGlobal}`);
}
global(); //output: Eu sou global!

//VARIÁVEL LOCAL:
function local(){
    let VarialveLocal = "Eu sou local!";
    console.log(`${VarialveLocal}`); //Executando de maneira local;
}
local();//Chamada de Função: momento de execução;
//console.log(`${VarialveLocal}`); //:erro: pois a variável não é global

var idade = 17;
if(!(idade >= 18)){
 console.log('Você precisa se alistar ao execito.');
}else{
 console.log('Você não precisa se alistar ao exercito.');
}

/*
       //var ano = prompt("Em que ano você nasceu?");
       //var ano_futuro = prompt(`Escreva o ano que você queira saber a sua idade até lá.`);
       var ano_calculado = ano_futuro - ano;
       console.log(`Nascido em ${ano} você terá uma idade de ${ano_calculado} anos em ${ano_futuro}.`);
   
       var casado = confirm("Você é casado(a)?");
       if(casado == true){
       console.log('Parabéns')
       }else{
       console.log('Que pena!😒')
       }

       //var nome = prompt('Digite seu nome:');
       while(nome == null || nome === ""){
       //var nome = prompt('Digite seu nome:');
       }
       console.log('Olá ' + nome);

       //let ano_bissexto = prompt('Digite um ano qualquer.');
       if(ano_bissexto % 4 === 0){
        console.log('É bissexto')
       }else{
        console.log('Não é bissexto')
       }
       //let numero = prompt('Digite um número qualquer');
       let resto = numero % 2;
       if(numero%2 === 0){
        console.log(`O ${numero} é par, sendo seu resto igual a ${resto}. Obs.: seu contrário é ${-(numero)}.`);
       }else{
        console.log(`O ${numero} é impar, sendo seu resto igual a ${resto}. Obs.: seu contrário é ${-numero}.`);
       }

       //var n1 = prompt("Digite um número qualquer");//2
       //var n2 = prompt("Digite outro número qualquer");//1
       if(n1 > n2 && n2 < n1){
        console.log('true');
       }else{
        console.log('false');
       }
*/

//Resultados Typeof

//var NUMBER = 2
//document.write(typeof NUMBER, "<br>");//output = number;

//var NUMBER = "Paulo"
//document.write(typeof NUMBER, "<br>");//output = string;

//var NUMBER = true
//document.write(typeof NUMBER, "<br>");//output = boolean;

//var NUMBER = undefined
//document.write(typeof NUMBER, "<br>");//output = undefined;

//var NUMBER = null
//document.write(typeof NUMBER, "<br>");//output = object;

//document.write(typeof function(){}, "<br>");//output = function;


const nome = String("Paulo Sérgio da Silva Marques")
const n_caracteres = nome.length;
const nome_maiuscila = nome.toUpperCase()
const nome_minuscula = nome.toLowerCase()
console.log(`Sua seu nome possui ${n_caracteres} caracteres. Sendo seu em Maiúscula: ${nome_maiuscila} e Minúscula: ${nome_minuscula}.`);


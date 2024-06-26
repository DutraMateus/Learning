/* Não podemos criar constantes com palavras reservadas
* Constantes precisam ter nomes significativos
* Não pode começar o nome de uma constante com um número
* Não podem ter espaços ou traços
* Utilizamos camelCase
* Case-sensitive
* Não podemos modificar o valor de uma constante
* NÃO UTILIZE VAR, UTILIZE CONST */

const nome = 'João';
console.log(nome);
//se for alterar, substituir const por let (assim pode alterar)

// + - * /  ===> sinais básicos de conta
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado); /* nesse momento não tem como mais 
utilizar o primeiro resultadoTriplicado */

console.log( typeof primeiroNumero); //pra descobrir o tipo da variável
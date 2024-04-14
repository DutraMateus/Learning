let nome = 'João'; //String
//var nome ='João'; =====> mais antigo

console.log(nome, 'nasceu em 1954.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('o filho de', nome, 'se chama Eduardo.');

/* Outra forma
* lets nome;   (Declarou a variável)
* nome = 'João'   (Inicializando a variável)
* console.log(nome);
* nome = 'Otávio'   (Altera a mesma variável)
* console.log(nome);
*/

// Não podemos redeclarar variáveis com let
// NÃO UTILIZE VAR, UTILIZE LET

/* REGRA: Não se pode criar uma variável com palavras reservadas.
* let let;
* let if;
* let console;
*/

/*Variáveis precisam ter nomes significativos.
*let n = 'João'  
*console.log(n);  =====> vai funcionar, mas não é o indicado!!
*/

/* REGGRA: Não podemos começar o nome de uma variável com um número.
* let 1nome;  ====> vai dar erro!
*/

/*REGRA: nome das variáveis não podem conter espaços ou traços.
*let nome cliente; ===> vai dar erro
*/

/* Utilizamos por conveção camelCase.
* let nomeCompleto = 'Luiz otávio';
*/

/* REGRA: Case-sensitive, letra minúscula e maiúscula fazem diferença.
*let nomeCliente = 'Luiz'; ===> são diferentes pro motor do JS
*let nomecliente = 'Otávio'; ===> são diferentes pro motor do JS
*/
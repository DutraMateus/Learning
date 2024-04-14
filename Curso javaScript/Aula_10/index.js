// Stringg, number, undefined, null, boolean

const nome = 'Luiz'; // String pode ser com '', "", ou ``
const num1 = 10; //Number
const num2 = 10.22; // Number (componto flutuante)
let nomeAluno; //declarar sem inicializar (undefined = não aponta pra local algum na memória)
const sobrenomeAluno = null; //declarar como nulo (não aponta pra local algum na memória)
const aprovado = true; // Boolean = true, false (valor lógico)

console.log(typeof aprovado, aprovado); //consultar tipo e mostrar resultado

/** Aritméticos 
 * + Adição / Concatenação
 * - / *  (Subtração, divisão e multiplicação)
 * **(potenciação)
 *  % (resto da divisão)
 */

/* Precedência
  ()
  **
  * / %
  + -
 */

  /*
  Incremento = ++
  Decremento = --

  Operadores de Atribuição
  **= (por exemplo)
  */

 //NaN = not a number, parseInt(inteiro), parseFloat(decimais)

 const num15 = 5;
 const num16 = 10;
 console.log(num15 + num16); //nesse caso soma
 
 const num3 = '5';
 const num4 = 10;
 console.log(num3 + num4); //nesse caso concatenação
 
 const num5 = 2;
 const num6 = 10;
 console.log(num5 ** num6); //potenciação
 
 const num7 = 10;
 const num8 = 3;
 console.log(num7 % num8); //resto da divisão
 
 let contador = 1;
 contador++; //2
 contador++; //3
 contador++; //4
 contador++; //5
 console.log(contador);
 //outra forma seria utilizando console.log(++contador) ou console.log(contador++)
 /*poderia também, atribuir uma variável pela qual vai passar o parâmetro do incremento
 ou um valor mesmo, por exemplo: 
 const passo = 2
 let contador = 1
 contador = contador + passo
 console.log(contador); 
 resultado seria 3
 */
 let contador2 = 2;
 contador2 *= 10
 console.log(contador2);
 
 const num9 = 10;
 const num10 =parseInt('5'); //vai converter o numero para inteiro
 console.log(num9 + num10);
 
 const num11 = 10;
 const num12 =parseFloat('5.2'); //vai converter o numero para float
 console.log(num11 + num12);
 
 const num13 = 10;
 const num14 =Number('5.2'); //vai converter para numero
 console.log(num13 + num14);
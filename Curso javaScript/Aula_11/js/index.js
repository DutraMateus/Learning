//alert ('Com a nossa mensagem.')

// window.confirm ou só confirm (booleano)
//window.prompt ou só prompt (caixa de texto)

let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:');
//console.log(num1, num2);

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;

alert(`O resultado da sua conta foi: ${resultado}`);

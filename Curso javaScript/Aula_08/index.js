/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg,
tem 1.80 de altura e seu IMC é de 25.925925925925924. Luiz Otávio nasceu em 1994.
*/
const nome = 'Luiz';
const sobrenome = 'Otávio Miranda'
const idade = 30;
const peso = 84;
const altura = 1.80; //em metros
let imc; //peso/ (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2024 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura, 'de altura e seu IMC é de:', imc, '.', nome, sobrenome, 'nasceu em', anoNascimento,'.');
// Outra forma
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc}. ${nome} ${sobrenome} nasceu em ${anoNascimento}`);

//Estruturas condicionais em JavaScript
//if,else if,elf

//Exemplo 1:verifica se um numero é maior ou menor que zero.
let numero = -5;

if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O numero é negativo.");
} else {
  console.log("O numero é zero");
}
console.log(numero);

//Exemplo 2: Verificar se uma pessoa é menor de idade.
let idade = 18;
if (idade < 18) {
  console.log("A pessoa é menor de idade.");
} else if (idade >= 18 && idade < 65) {
  console.log("A pessoa é adulta.");
} else {
  console.log("A pessoa é idosa.");
}
console.log(idade);

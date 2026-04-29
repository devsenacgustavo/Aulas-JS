//Funcões de seta (arrow functions) são uma forma de mais precisa de escrever funções no javascript.

//Exemplo 1:função de seta simples
const saudacao = () => {
  return "Olá mundo";
};

console.log(saudacao());

//Exemplo 2:
const soma = (a, b) => {
  return a + b;
};
console.log(soma(89, 1));

//Exemplo 3:
const multiplicacao = (a, b) => a * b;
console.log(multiplicacao(2, 3));

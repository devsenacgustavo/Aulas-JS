let diaSemana = Math.floor(Math.random() * 7);
let nomeDia;

switch (diaSemana) {
  case 0:
    nomeDia = "Segunda-feira";
    break;
  case 1:
    nomeDia = "Terça-feira";
    break;
  case 2:
    console.log("Quarta-feira");
    break;
  case 3:
    console.log("Quinta-feira");
    break;
  case 4:
    console.log("Sexta-feira");
    break;
  case 5:
    console.log("Sábado");
    break;
  case 6:
    console.log("Domingo");
    break;
  default:
    console.log("Número inválido! Digite de 1 a 7.");
}

//Desafio 2
let num = 10;
if (num >= 10 && num <= 20) {
  console.log("O número está entre 10 e 20");
}

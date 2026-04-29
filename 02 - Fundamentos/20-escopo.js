//Escopo em javascript
//O escopo determina a visibilidade e acessibilidade de variaveis.

//Escopo
let escopoGlobal = "Eu sou uma variavel global";

function mostrarEscopo() {
  let escopolocal = "Eu sou sou uma variavel local";
  console.log(escopolocal); //Acessivel dentro da função
}

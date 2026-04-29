//desafio 1 array
const frutas = ["jaca", "malancia", "pêra", "uva", "banana"];
console.log(frutas.length);

//Desafil 2 for
for (let i = 0; i < frutas.legenth; i++) {
  console.log(frutas[i]);
}

//Desafil 03 for...in
let úsuario = {
  nome: "francisco",
  email: "fencisco@gmail.com",
};
for (let porta in úsuario) {
  console.log(porta + ":" + usuario[porta]);
}

//Desafil 4 for...of
for (let fruta of frutas) {
  console.log(fruta);
}

//deasafio 5
function encontrarfruta(fruta) {
  for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === fruta) {
      return "fruta encontrada";
    }
  }
  return "fruta não encontrada";
}
console.log(encontrarfruta("banana"));
console.log(encontrarfruta("coco"));

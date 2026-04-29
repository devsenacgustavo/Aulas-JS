//Estrutura de repetição - for in

//for in lê os indices ou chaves do objeto
const pessoa = {
  nome: "gustavo",
  idade: 23,
  profissao: "progsmador",
};

for (const atributo in pessoa) {
  console.log("O atriburto " + atributo + "=" + pessoa[atributo]);
}

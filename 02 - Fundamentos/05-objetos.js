//Objetos são coleções de propriedades, onde

//criando um objeto
let pessoa = {
  nome: "Gustavo",
  idade: 30,
  profissão: "Desenvolvedor",
  trabalhando: true,
  saudacao: function () {
    console.log("Olá, meu nome è" + this.nome);
  },
};

//Acessando propriedades
console.log(pessoa.nome); //Acessando a propriedade nome
console.log(pessoa.idade); //Acessando a propriedade idade
console.log(pessoa.profissão); //Acessando a propriedade profissão
console.log(pessoa.trabalhando); //Acessando a propriedade trabalhando

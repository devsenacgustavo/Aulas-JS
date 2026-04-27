//Desafio - 01
let pessoa = {
  nome: "Gustavo",
  idade: 23,
  profissao: "Desenvolvedor",
  trabalhando: true,
  saudacao: function () {
    console.log("olá, meu nome é" + this.nome);
  },
};

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

//Modificando propriedades
pessoa.idade = 31;
profissão = "Engenheiro de Software";

console.log(pessoa);

//Adicionando novas propriedades
pessoa.cidade = "Arapiraca";

console.log(pessoa);

//Deletando propriedades
delete pessoa.taTrabalhando;

//singleton
var numero = 1;//novo ecman 'let'

function exibirProximo(){
  console.log(numero++);
}

module.exports = {exibirProximo};

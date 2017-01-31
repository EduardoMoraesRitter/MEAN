//console.log(process.argv);// acesso aos argumento
function temParam(param){
  return process.argv.indexOf(param) !== -1
  //process,argv - pegar os parametros de entrada, quando carrega a aplicacao
}

if (temParam('--producao')) {
  console.log('atencao total')
}else {
  console.log('tranquilo')
}

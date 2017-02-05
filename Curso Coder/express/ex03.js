const express = require('express')
const server = express()

//cadeia de middleware
//modelo use - mapea para todos os metodos e começando com o prefixo api/qualquer coisa
//http://127.0.0.1:3000/api/srrete
server.use('/api', function(req, res, next){
  console.log('inicio')
  next()
  console.log('fim')
})

server.use('/api', function(req, res){
  console.log('resposta')
  res.send('<h1>API!</h1>')
})

server.use(function(req, res){
  console.log('teste')
  res.send('<h1>OI!</h1>')
})

//escutando a porta, callback de arrow function
server.listen(3000, () => console.log('executando...'))

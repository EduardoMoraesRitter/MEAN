const express = require('express')
const server = express()

//cadeia de middleware

server.get('/', function(req, res, next){
  console.log('inicio')
  next()
  console.log('fim')
})

server.get('/', function(req, res){
  console.log('resposta')
  res.send('<h1>ola</h1>')
})

//escutando a porta, callback de arrow function
server.listen(3000, () => console.log('executando...'))

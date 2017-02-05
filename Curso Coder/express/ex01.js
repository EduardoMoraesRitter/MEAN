const express = require('express')
const server = express()

//metodo get
server.get('/', function(req, res){//url, funcao middleware
  res.send('<h1>index</h1>')
})

server.all('/teste', (req, res) => res.send('<h1>teste all</h1>') )//metodo geral(url, arrow)

server.get(/api/, function(req, res){//expresao regular, funcao middleware
  res.send('<h1>api</h1>')
})

//escutando a porta, callback de arrow function
server.listen(3000, () => console.log('executando...'))

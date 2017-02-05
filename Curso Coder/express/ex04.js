const express = require('express')
const server = express()

//mapear varios metodos para a mesma url
server.route('/clientes')
  .get((req, res) => res.send('listar cliente'))
  .post((req, res) => res.send('novo cliente'))
  .put((req, res) => res.send('alterar cliente'))
  .delete((req, res) => res.send('excluir cliente'))

//escutando a porta, callback de arrow function
server.listen(3000, () => console.log('executando...'))

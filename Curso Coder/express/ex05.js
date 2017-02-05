const express = require('express')
const server = express()
const router = require('./ex05_routes')

server.use('/api', router)

//escutando a porta, callback de arrow function
server.listen(3000, () => console.log('executando...'))

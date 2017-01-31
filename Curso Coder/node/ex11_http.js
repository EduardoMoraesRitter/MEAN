const http = require('http')
const server = http.createServer(function(req, res){
  res.writeHead(200,{"Content-Type": "text/html"})
  res.end('<h1>acho que melhor usar o Express</h1>')
})

const porta = 3456
server.listen(porta, function(){
  console.log(`escutando porta ${porta}`)
})
//http://localhost:3456/teste navegador

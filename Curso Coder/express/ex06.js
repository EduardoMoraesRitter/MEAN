const exp1 = require('express')
const exp2 = require('express')
console.log(exp1 === exp2)// se trata da mesma instancia

const serv1 = exp1()
const serv2 = exp1()
console.log(serv1 === serv2)// se trata de outra instancia

const rout1 = exp1.Router()
const rout2 = exp1.Router()
console.log(rout1 === rout2)// se trata de outra instancia

//se quiser usar o Router em outro lugar vc tem passar como parametro ou expor ele

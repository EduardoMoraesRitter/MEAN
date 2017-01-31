console.log(global === this)
console.log(module === this)
console.log(module.exports === this)//é verdade

this.digaOi = function(){
  console.log('oi')
}

//module.exports.digaOI ou assim

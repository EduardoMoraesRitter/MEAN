const _ = require('lodash')

const alunos = [
  {nome:'joao',nota: 7.6},
  {nome:'maria',nota:8.6},
  {nome:'pedro',nota:8.1}
]

const media = _.sumBy(alunos, 'nota') / alunos.length

console.log(media)

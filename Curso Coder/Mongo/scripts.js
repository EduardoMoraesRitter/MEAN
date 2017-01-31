//--startar o mongo
/*
C:
cd \Program Files\MongoDB\Server\3.4\bin
mongod
 */
/*
c:
cd Program Files (x86)\MongoDB\Server\3.0\bin
mongod
 */

//acessar o banco pelo terminal
//mongo
//existe - banco>colecoes(tabela)>documento(coluna|linha)

//--comandos
//monstar bancos
show dbs
//criar banco e usar
use db_finance
//criar colecao
db.createCollection('pagamentos')
    //destrur a colecao, se tiver apenas uma no banco ele apaga o banco
db.pagamentos.drop()
    //mostrar colecao
show collections
//inserir dados
db.pagamentos.insert({ name: "janeiro/17", month: 1, year: 2017 })

db.pagamentos.insert({
    name: "março/17",
    month: 3,
    year: 2017,
    credits: [
        { name: 'salario', value: 5000 }
    ],
    debts: [
        { name: 'luz', value: 100, status: 'pago' },
        { name: 'telefone', value: 100, status: 'pendente' }
    ]
})

//salvando dado tanto para inserir quanto para atualizar
db.pagamentos.save({ name: "fevereiro/17", month: 2, year: 2017 })



//consulta
db.pagamentos.find()
    //consulta formatada
db.pagamentos.find().pretty()
    //so o primeiro
db.pagamentos.findOne()
    //filtro 
db.pagamentos.findOne({ month: 2 })
    //com filtro e logica(or | and)
db.pagamentos.find({ $or: [{ month: 1 }, { month: 2 }] })
    //possui algun atributo dentro
db.pagamentos.find({ credits: { $exists: true } })
    //paginacao pular um item
db.pagamentos.find({ year: 2017 }).skip(1)
    //paginacao pular um item e limitando a quantidade
db.pagamentos.find({ year: 2017 }).skip(1).limit(1)

//agregacao
db.pagamentos.aggregate([{
    $project: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" } },
}, {
    $group: {
        _id: null,
        credit: { $sum: "$credit" },
        dept: { $sum: "$debt" }
    }
}])

//agrupamento
db.pagamentos.aggregate({
    $group: {
        _id: null,
        credits: { $sum: "$credits" },
        depts: { $sum: "$debts" }
    }
})


//update, selecionar
db.pagamentos.update({ $and: [{ month: 1 }, { year: 2017 }] }, { $set: { credits: [{ name: "salario", value: 5000 }] } })

//consulta com colunas especificas que existam, trazendo alguns conteudos
db.pagamentos.find({ credits: { $exists: true } }, { _id: 0, name: 1, credits: 2 }).pretty()


//count
db.pagamentos.count()

//exclusao
db.pagamentos.remove({ month: 2 })
    //limita 1 registro
db.pagamentos.remove({ year: 017 }, 1)

//drop data base
db.dropDatabase()
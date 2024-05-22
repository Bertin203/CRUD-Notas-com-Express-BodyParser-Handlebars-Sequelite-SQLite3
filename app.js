const express = require('express')
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')
const db = require('./db/connection')

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

const port = 8000 

function calcularMediaAluno(AV1, AV2, AV3) {
    return ((Number(AV1) + Number(AV2) + Number(AV3)) / 3)
}

function arrendondarMediaAlunos(alunos) {
    alunos.forEach(aluno => {
        if(aluno.Media >= 6 && aluno.Media <= 6.9){
          aluno.Media = 7
        }
    })
}

app.listen(port, () => {
    console.log(`O número da porta deste servidor, é mais de ${port}!`)
})

db.authenticate().then(() => {
    console.log('Banco conectado')
}).catch(err => {
    console.log('Erro ao conectar', err)
})

app.use('/', require('./routes/aluno'))

/*
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/alunos', (req, res) => {
    // nome do arquivo, nome da variável, lista
    res.render("alunos", {alunos: alunos})
})

app.get('/formAluno', (req, res) => {
    res.render('formAluno')
})

app.get('/aprovados', (req, res) => {
    const aprovados = alunos.filter(aluno => aluno.Media >= 7)
    res.render("alunos", {alunos: aprovados})
})

app.get('/reprovados', (req, res) => {
    const reprovados = alunos.filter(aluno => aluno.Media < 7)
    res.render("alunos", {alunos: reprovados})
})

app.get('/arredondar', (req, res) => {
    arrendondarMediaAlunos(alunos)
    res.render('alunos', {alunos: alunos})
})

app.post('/alunos', (req, res) => {
    let {CPF, Nome, AV1, AV2, AV3} = req.body
    let Media = calcularMediaAluno(AV1, AV2, AV3).toFixed(1)
    let info = {CPF, Nome, AV1, AV2, AV3, Media}
    alunos.push(info)
    res.redirect('alunos')
})
*/

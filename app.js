const express = require('express')
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use('/public',express.static(__dirname + '/public'));

const port = 9001

app.listen(port, () => {
    console.log(`Servidor online e rodando no link: 'localhost:${port}'!`)
})

app.use('/', require('./routes/adm'))
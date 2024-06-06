const express = require('express')
const Clientes = require('../models/Cliente')
const Funcionario = require('../models/Funcionario')
const Produto = require('../models/Produto')
const Venda = require('../models/Venda')
const router = express.Router()

router.get("/adm", (req, res) => {
    res.render('adm')
})

router.get('/vendas', (req, res) => {
    res.render('vendas')
})
module.exports = router
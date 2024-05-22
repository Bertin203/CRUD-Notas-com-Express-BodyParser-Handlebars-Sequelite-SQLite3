const express = require('express')
const Alunos = require('../models/Alunos')
const router = express.Router()
const {where} = require('sequelize')

router.get("/", (req, res) => {
    res.render('home')
})


router.get("/alunos", (req, res) => {
    Alunos.findAll({order: [
        ['nome', 'ASC']
    ]})
    .then(alunos => {
        res.render('alunos', {
            alunos
        })
    })
})


router.get("/editar/:id", (req, res) => Alunos.findOne({
    where: {id: req.params.id}
}).then(aluno => {
    res.render('editarAluno', {
        aluno
    })
}).catch(err => console.log(err)))


router.get('/formAluno', (req, res) => {
    res.render('formAluno')
})


router.post('/formAluno', (req, res) => {
    let {id, CPF, Nome, AV1, AV2, AV3, Media} = req.body
    Media = ((Number(AV1) + Number(AV2) + Number(AV3)) / 3).toFixed(1)

    Alunos.create({
        CPF, 
        Nome,
        AV1,
        AV2,
        AV3, 
        Media
    })
    .then(() => res.redirect('/alunos'))
    .catch(err => console.log(err))
})

router.post('/editar', (req, res) => {
    let {id, CPF, Nome, AV1, AV2, AV3, Media} = req.body
    Media = ((Number(AV1) + Number(AV2) + Number(AV3)) / 3).toFixed(1)

    let dados = {CPF, Nome, AV1, AV2, AV3, Media}

    Alunos.update(dados, {where: {id: id}})
    .then(() => {
        res.redirect('/alunos')
    })
    .catch(err => {console.log(err)})
})

router.get('/deletar/:id', (req, res) => {
    const id = req.params.id
    Alunos.destroy({where: {id: id}})
    .then(() => {
        res.redirect('/alunos')
    })
    .catch(err => console.log(err))
})

module.exports = router
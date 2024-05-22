const Sequelize = require('sequelize')
const db = require('../db/connection')

const Alunos = db.define('alunos', {
    CPF: {
        type: Sequelize.STRING,
    }, 
    Nome: {
        type: Sequelize.STRING,
    }, 
    AV1: {
        type: Sequelize.REAL,
    }, 
    AV2: {
        type: Sequelize.REAL,
    }, 
    AV3: {
        type: Sequelize.REAL,
    }, 
    Media: {
        type: Sequelize.REAL,
    }
})

module.exports = Alunos
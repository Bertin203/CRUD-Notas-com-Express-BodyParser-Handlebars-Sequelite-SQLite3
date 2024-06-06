const Sequelize = require('sequelize')
const db = require('../db/connection')

const Funcionario = db.define('funcionario', {
    ID: {
        type: Sequelize.INTEGER,
    }, 
    CPF: {
        type: Sequelize.STRING,
    },
    Nome: {
        type: Sequelize.STRING,
    }
})

module.exports = Funcionario
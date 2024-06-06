const Sequelize = require('sequelize')
const db = require('../db/connection')

const Cliente = db.define('cliente', {
    ID: {
        type: Sequelize.INTEGER,    
    },
    CPF: {
        type: Sequelize.STRING,
    }, 
    Nome: {
        type: Sequelize.STRING,
    },
    Email: {
        type: Sequelize.STRING,
    }
})

module.exports = Cliente
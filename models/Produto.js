const Sequelize = require('sequelize')
const db = require('../db/connection')

const Produto = db.define('produto', {
    ID: {
        type: Sequelize.INTEGER,
    }, 
    Nome: {
        type: Sequelize.STRING,
    },
    Preço: {
        type: Sequelize.REAL,
    }
})

module.exports = Produto
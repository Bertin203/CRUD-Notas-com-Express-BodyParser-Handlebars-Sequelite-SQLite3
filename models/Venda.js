const Sequelize = require('sequelize')
const db = require('../db/connection')

const Venda = db.define('venda', {
    ID: {
        type: Sequelize.INTEGER,
    }
})

module.exports = Venda
const Sequelize = require('sequelize')
const db = require('../db')

const Interests = db.define('interests', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Interests;
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
    interests: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: [],
    }
})

module.exports = User
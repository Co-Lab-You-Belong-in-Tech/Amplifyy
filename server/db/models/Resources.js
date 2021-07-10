const Sequelize = require('sequelize')
const db = require('../db')

const Resources = db.define('resources', {
    
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: true
    },
    country: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    url: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    imgUrl: {
        type: Sequelize.TEXT,
        allowNull: true,
    }
})

module.exports = Resources;
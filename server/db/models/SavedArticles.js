const Sequelize = require('sequelize')
const db = require('../db')

const SavedArticles = db.define('savedarticles', {
    articleid: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    publishedDate: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    source: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
})

module.exports = SavedArticles
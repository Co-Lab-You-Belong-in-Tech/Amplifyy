const router = require('express').Router()
const { models: { Resources, Category }} = require('../db')
module.exports = router

router.get('/', async(req, res, next) => {
    try {
        const resources = await Resources.findAll({
            include: {
                model: Category
            }
        })
        res.status(201).send(resources)
        
    } catch (error) {
        console.log("ERROR FETCHING RESOURCESSSSS")
        next(error)
    }
})
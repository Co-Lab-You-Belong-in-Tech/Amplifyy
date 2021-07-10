const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    if(req.session.user) {
    const user = await User.findOne({
      where: {
          id: req.session.user
      }
    })
    res.status(200).send(user)
    }  else {
        const newUser = await User.create()
        req.session.user = newUser.id
        res.status(201).send(newUser)
    }
  
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
    try {
      const user = await User.findByPk(req.session.user)
      let updatedUser = await user.update({interests: req.body})
      res.json(updatedUser)
    } catch (err) {
       console.log("Failed to update interests")
      next(err)
    }
  })
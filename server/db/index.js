//this is the access point for all things database related!
const Category = require('./models/Category')
const Interests = require('./models/Interests')
const Resources = require('./models/Resources')
const SavedArticles = require('./models/SavedArticles')
const db = require('./db')
const User = require('./models/User')


//associations could go here!
/* 
one-to-many relationships
*/
Category.hasMany(Resources)
Resources.belongsTo(Category)

/**
 * many-to-many relationships
 */
SavedArticles.belongsToMany(User, {through: "bookmarks"})
User.belongsToMany(SavedArticles, {through: "bookmarks"})

module.exports = {
  db,
  models: {
    Category,
    Interests,
    Resources,
    SavedArticles,
    User,
  }
}

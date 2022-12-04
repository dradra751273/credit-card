const USER = require('../userModel')
const db = require('../../config/mongoose')
const userData = require('./users.json')
const users = userData.results


db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb open!')
  // create restaurant documents
  users.forEach(user => {
    (async function loadRestaurant() {
      await USER.create(user)
    })()
  })
  console.log('done')
})


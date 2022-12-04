const REST = require('../restaurantModel')
const db = require('../../config/mongoose')
const restData = require('./restaurants.json')
const restList = restData.results


db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb open!')
  // create restaurant documents
  restList.forEach(rest => {
    (async function loadRestaurant() {
      await REST.create(rest)
    })()
  })
  console.log('done')
})


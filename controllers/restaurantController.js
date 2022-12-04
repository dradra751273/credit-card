const axios = require('axios')
const REST = require('../models/restaurantModel')
const catchAsync = require('../utils/catchAsync')


exports.showRestaurants = catchAsync(async (req, res, next) => {
  const restaurants = await REST.find().lean()

  res.render('./restaurants/restaurants', {restaurants})
})


exports.reversRestaurant = catchAsync(async (req, res, next) => {
  // 1) Restaurant data
  const restaurant_id = req.body['restaurant_id']
  const datingTime = req.body['dating_time']
  const restaurant = await REST.findOne({restaurant_id: restaurant_id}).lean()

  // 2) Send the message to LINE
  const webhook_url = 'https://notify-api.line.me/api/notify'
  const autoToken = 'CLozcygyL9j0gxpkNhD3SrAjnbbR54d0Y7lln0p7doA'
  const data = new URLSearchParams()
  const datingInfo = `
    餐廳： ${restaurant.name}
    餐廳地點： ${restaurant.location}
    餐廳電話： ${restaurant.phone}
    Google Map: ${restaurant.google_map}
    吃飯時間： ${datingTime}
  `
  data.append('message', datingInfo)
  await axios.post(webhook_url, data, {
    headers:{
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Authorization': 'Bearer ' + autoToken
    }
  })

  // 3) Redirect to the restaurant page
  res.redirect('/restaurants')

})
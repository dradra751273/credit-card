const express = require('express')
const restaurantController = require('../controllers/restaurantController')

// INITIALIZE ROUTER
const router = express.Router()

router.route('/')
  .get(restaurantController.showRestaurants)
  .post(restaurantController.showRestaurants)

router.route('/booking')
  .post(restaurantController.reversRestaurant)


module.exports = router
const express = require('express')
const homeController = require('../controllers/homeController')

// INITIALIZE ROUTER
const router = express.Router()

router.route('/')
  .get(homeController.showLoginPage)
  .post(homeController.verifyLogin)


module.exports = router
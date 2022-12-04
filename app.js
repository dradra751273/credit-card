const express = require('express')
const exphbs = require('express-handlebars')
// Customized
require('./config/mongoose')
const homeRouter = require('./routes/homeRoutes')
const restaurantRouter = require('./routes/restaurantRoutes')
const errController = require('./controllers/errorController')

// PORT
const PORT = process.env.PORT || 3000


// ★ INITIALIZE APP
app = express()

// 1) Set app view engine
app.engine('hbs', exphbs.engine({defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

// 2) App middleware
app.use(express.static('views'))
app.use(express.urlencoded({extended: true}))


// 3) Routers
app.use('/', homeRouter)
app.use('/restaurants', restaurantRouter)
// app.use('/api/v1/restaurant', restaurantRouter)

// 4) Error handler
app.use(errController.globalErrHandler)


// ★ START SERVER
app.listen(PORT, () => {
  console.log(`App is running on http://localhost: ${PORT}`)
})
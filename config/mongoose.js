const mongoose = require('mongoose')

const password = 'water1988'
const DB_URI = process.env.MONGODB_URI || `mongodb+srv://fushaowei:${password}@cluster0.plcfxth.mongodb.net/dating?retryWrites=true&w=majority`

mongoose.connect(DB_URI)
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})


module.exports = db
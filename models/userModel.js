const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    require: [true, 'A user must have a name'],
  },
  password: {
    type: String,
    require: [true, 'A user needs a password']
  },

})


module.exports = mongoose.model('Users', userSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
  restaurant_id: {
    type: String,
    require: [true, 'A restaurant must have an ID'],
    unique: true
  },
  name: {
    type: String,
    require: [true, 'A restaurant must have a name'],
  },
  image: {
    type: String,
    require: [true, 'A restaurant must have an image']
  },
  location: {
    type: String,
    require: [true, 'A restaurant must have a location'],
  },
  phone: {
    type: String,
    require: [true, 'A restaurant must have a phone number'],
  },
  google_map: {
    type: String,
    require: [true, 'A restaurant must have google map'],
  }
})


module.exports = mongoose.model('Restaurants', restaurantSchema)
const mongoose = require('mongoose');
const seed = require('./seed.js');

mongoose.connect('mongodb://172.17.0.2:27017/airbnb', { useNewUrlParser: true }, { useUnifiedTopology: true }).then(() => {
  console.log('Connected to Database');
  seed.seed();
}).catch((err) => {
  console.log('Not Connected to Database ERROR!', err);
});

const db = mongoose.connection;

const listingSchema = mongoose.Schema({
  // id: { type: Number, unique: true },
  id: Number,
  photos: [
    {
      superhost: Boolean,
      heart: Boolean,
      rating: String,
      reviews: String,
      listing: String,
      title: String,
      price: String,
      image: String,
    },
  ],
});

const Listing = mongoose.model('Listing', listingSchema);

const favoritesSchema = mongoose.Schema({
  id: Number,
  name: String,
  count: Number,
  img: String,
});

const Favorites = mongoose.model('Favorites', favoritesSchema);

module.exports.Listing = Listing;
module.exports.Favorites = Favorites;
module.exports.db = db;

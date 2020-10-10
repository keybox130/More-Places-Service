const mongoose = require('mongoose');
const seed = require('./seed.js');

mongoose.connect('mongodb://172.17.0.2:27017/airbnb', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', () => { console.error.bind(console, 'connection error:'); });
db.once('open', () => {
  console.log('Connection open!');
  seed.seed();
});

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

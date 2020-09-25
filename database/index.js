const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airbnb', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log ('Connection open!')});

const listingSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  superhost: Boolean,
  heart: Boolean,
  reviews: String,
  listing: String,
  title: String,
  price: String,
  image: String
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = {
  Listing,
  db
};
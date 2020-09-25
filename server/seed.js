const mongoose = require('mongoose');
const { Listing } = require('../database/index');
const { db } = require('../database/index');

db.dropDatabase();

const random = (min, max, floor) => {
  if (floor) {
    return Math.floor(min + Math.random * (max - min));
  }
  return min + Math.random * (max - min);
};

const newBoolean = () => {
  let num = random(0, 100, true);
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const randRating = () => {
  let chance = random(0, 100, true);
  if (chance > 20) {//arbitrarily set chance of reviews below 4 to 20%
    let num = random(0, 1, false);
    return (4 + num).toString();
  }
  let num = random(0, 3, false);
  return (1 + num).toString();
};

const randReviews = () => {
  let num = random(0, 1000, true);
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }
  return ' (' + num + ')';
};

const generateReview = () => {
  let reviews = randReviews();
  if (reviews === 0) {
    return 'New'; //include "No reviews yet" case? -> no star either
  } else if (reviews === 1) {
    return '1 review';
  }
  return randRating() + reviews;
};

const listing = () => {
  let listings = [
    'Entire house ',
    'Entire villa ',
    'Entire apartment ',
    'Entire guesthouse ',
    'Private Room ',
    'Studio ',
    'Entire guest suite '
  ];
  let num_beds = random(0, 10, true) + ' beds';
  return listings[random(0, 6, true)] + num_beds;
};

let titles = [
  'Marton End',
  'Honeysuckle Lodge',
  'Seaside Escape',
  'Roselands Getaway',
  'Pigeon\'s Lodge',
  'Rose House',
  'Meadowside',
  'Church End',
  'The Old Lighthouse',
  'Applelands',
  'Lakeside',
  'Palmlands',
  'Cherry Lodge',
  'Orchard End',
  'Primrose Way',
  'Serendipity',
  'Garden Grove'
];
let adjectives = [
  'Stunning',
  'Spacious',
  'Private home',
  'Cozy',
  'Lovely',
  'Home away from home',
  'Bright',
  'Charming',
  'Luxurious',
  'Modern'
];
let nouns = [
  ' escape',
  ' bungalow',
  ' retreat',
  ' getaway',
  ' all-inclusive stay',
  ' contemporary suite',
  ' estate'
];
let add_ons = [
  ' w/ Jacuzzi',
  ' Downtown',
  ' Nightlife',
  ' w/ Pool',
  ' w/ City View',
  ' close to the Beach',
  ' Near Trails',
  ' in the Hills'
];

//pull random from array of names
const randTitle = () => {
  let index = random(0, titles.length, true);
  let index1 = random(0, adjectives.length, true);
  let index2 = random(0, nouns.length, true);
  let index3 = random(0, add_ons.length, true);
  return titles[index] + ' - ' + adjectives[index1] +
  nouns[index2] + add_ons[index3];
};

const randPrice = () => {
  let num = random(300, 2000, true);
  return '$' + num + ' / night';
};

const imageUrl = () => {
  //how to access AWS S3 images from bucket???
}

const seed = () => {
  for (let i = 0; i < 20; i++) {
    Listing.create({
      superhost: newBoolean(),
      heart: newBoolean(),
      reviews: generateReview(),
      listing: listing(),
      title: randTitle(),
      price: randPrice(),
      image: //AWS S3 url
    }, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }
};

seed();

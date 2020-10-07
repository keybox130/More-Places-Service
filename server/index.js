const express = require('express');

const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { Listing, Favorites } = require('../database/index.js');

app.use('/api', createProxyMiddleware({ target: 'http://www.example.org', changeOrigin: true }));

app.use('/', bodyParser.json());

// get All
app.get('/stays/', (req, res) => {
  Listing.find({}).exec((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  });
});

app.get('/stays/:roomId', (req, res) => {
  const { roomId } = req.params;
  Listing.find({ id: roomId }).exec((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  });
});

// get All for list of favorites
app.get('/favorites/', (req, res) => {
  Favorites.find({}).exec((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  });
});

app.post('/favorites/', (req, res) => {
  console.log('Post req.body: ', req.body);
  Favorites.create(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log('Posted successfully: ', data);
      res.status(200).send();
    }
  });
});

app.put('/favorites/:id/:count', (req, res) => {
  const { id, count } = req.params;
  Favorites.findOneAndUpdate({ id }, { count }).exec((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log('Successfully updated count!', data);
      res.status(200).send();
    }
  });
});

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

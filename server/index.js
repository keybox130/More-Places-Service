const express = require('express');

const app = express();
const port = 3000;
const path = require('path');
// const bodyParser = require('body-parser');
const { Listing } = require('../database/index.js');

// app.use('/', bodyParser.json());

app.get('/api/roomId/:roomId', (req, res) => {
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

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

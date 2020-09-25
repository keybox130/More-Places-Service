const express = require('express');
const app = express();
const port = 3000;

app.get('/api/listings', (req, res) => {
  db.find({}).exec((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
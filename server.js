'use strict';

// Load array of notes
const data = require('./db/notes');
const express = require('express');
const { PORT } = require('./config');

const app = express();

app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
  const {searchTerm} = req.query;
  if(searchTerm) {
    // matches against title and content
    const results = data.filter((item) => {
      return item.title.includes(searchTerm)
        || item.content.includes(searchTerm);
    });
    return res.json(results);
  } else {
    return res.json(data);
  }
});

app.get('/api/notes/:id', (req, res) => {
  const {id} = req.params;
  const matchingItem = data.find(item => item.id === Number(id));
  res.json(matchingItem);
});

app.listen(PORT, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});

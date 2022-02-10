const express = require('express');
const movies = require('../data/data');
const router = new express.Router();

router.get('/', (request, response) => {
  return response.send(movies);
});

router.get('/movie/:id', (request, response) => {
  const { id } = request.params;
  const targeted_movie = movies.filter((movie) => movie.id == id);
  response.send(targeted_movie);
});

router.post('/movie', (request, response) => {
  const { name, author } = request.body;

  response.send([
    {
      name,
      author,
    },
  ]);
});
module.exports = router;

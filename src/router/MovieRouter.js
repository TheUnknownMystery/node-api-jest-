const express = require('express');
const movies = require('../data/data');
const router = new express.Router();

router.get('/', (request, response) => {
  return response.send(movies);
});

router.get('/movie/:id', ({ params: { id } }, response) => {
  const targeted_movie = movies.filter((movie) => movie.id == id);
  response.send(targeted_movie);
});

router.post('/movie', ({ body }, response) => {
  const { name, author } = body;

  response.send([
    {
      id: movies.length + 1,
      name,
      author,
    },
  ]);
});

module.exports = router;

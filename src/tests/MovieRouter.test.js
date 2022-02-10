const request = require('supertest');
const app = require('../app');
const movies = require('../data/data');

test('should give us the move data', async () => {
  const response = await request(app).get('/');
  expect(response._body).toEqual(movies);
});

test('should give movie by id', async () => {
  const response = await request(app).get('/movie/2');

  expect(JSON.parse(response.text)).toEqual([movies[1]]);
});

test('should give us an id and send us the posted movie obj', async () => {
  const example = {
    name: 'movie 888',
    author: 'new author',
  };

  const response = await request(app).post('/movie').send(example);

  expect(response._body).toEqual([
    {
      id: movies.length + 1,
      ...example,
    },
  ]);
});

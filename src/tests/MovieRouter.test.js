const request = require('supertest');
const app = require('../app');
const movies = require('../data/data');

test('should give us the move data', async function () {
  const response = await request(app).get('/');
  expect(response._body).toEqual(movies);
});

test('should give movie by id', async function () {
  const response = await request(app).get('/movie/2');
  expect(JSON.parse(response.text)).toEqual([
    { id: 2, name: 'movie 2', author: 'movie 2 author' },
  ]);
});

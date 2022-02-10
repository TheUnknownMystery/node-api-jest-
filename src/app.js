const express = require('express');
const MovieRouter = require('./router/MovieRouter');
const app = express();

app.use(express.json());
app.use(MovieRouter);

module.exports = app;

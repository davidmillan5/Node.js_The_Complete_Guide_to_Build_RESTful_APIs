'use strict';

const express = require('express'),
  app = express(),
  PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]);
});

app.get('/api/courses/id:', (req, res) => {
  res.send(req.params.id);
});

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});

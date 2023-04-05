'use strict';

const express = require('express'),
  app = express(),
  PORT = process.env.PORT || 3000,
  Joi = require('joi');

app.use(express.json()); // Adding a piece of middleware

const courses = [
  {
    id: 1,
    name: 'course 1',
  },
  { id: 2, name: 'course 2' },
  { id: 3, name: 'course 3' },
];

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send('The course with the given ID was not found');
  res.send(course);
});

app.post('/api/courses', (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  const result = Joi.valid(req.body, schema);
  if (result.error) {
    res.status(400).send(result.error);
    return;
  }
  const course = { id: courses.length + 1, name: req.body.name };
  courses.push(course);
  res.send(course);
});

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});

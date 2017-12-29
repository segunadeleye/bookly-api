import bodyParser from 'body-parser';
import express from 'express';

module.exports = app => {
  app.set('json spaces', 4);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static('public'));
};

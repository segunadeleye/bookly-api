import bodyParser from 'body-parser';

module.exports = app => {
  app.set('json spaces', 4);
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json());
};

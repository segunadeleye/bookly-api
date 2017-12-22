'use strict';

module.exports = app => {
  const Book = app.db.models.book;

  app.post('/books', (req, res) => {
    Book.create(req.body)
      .then(book => res.json({ status: true, book }))
      .catch(err => res.json({ status: false, err }));
  });
};

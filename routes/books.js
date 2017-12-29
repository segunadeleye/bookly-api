'use strict';

module.exports = app => {
  const Book = app.db.models.book;

  app
    .route('/books')
    /**
     * @api {post} /books Create Book
     * @apiGroup Books
     *
     * @apiParam {String} title Book title
     * @apiParam {String} author Book author
     * @apiParam {String} edition Book edition
     * @apiParam {Number} year Book year of release
     * @apiParam {String} description Book description
     * @apiParam {Number} user_id Id of user
     * @apiParamExample {json} Input
     *  {
     *    "title": "Building APIs with Node.js",
     *    "author": "Caio Ribeiro Pereira",
     *    "edition": "1",
     *    "year": 2016,
     *    "description": "A book that takes you step by step on how to create production-ready APIs with Node.js",
     *    "user_id": 1
     *  }
     *
     * @apiSuccess {Boolean} status Response status
     * @apiSuccess {Object} book Create book
     * @apiSuccess {Number} book.id Book id
     * @apiSuccess {String} book.title Book title
     * @apiSuccess {String} book.author Book author
     * @apiSuccess {String} book.edition Book edition
     * @apiSuccess {Number} book.year Book year
     * @apiSuccess {String} book.description Book description
     * @apiSuccess {Number} book.user_id User Id
     * @apiSuccess {Date} book.created_at Creation date
     * @apiSuccess {Date} book.updated_at Update date
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     *  {
     *    success: true,
     *    book: {
     *      "id": 1,
     *      "title": "Building APIs with Node.js",
     *      "author": "Caio Ribeiro Pereira",
     *      "edition": "1",
     *      "year": 2016,
     *      "description": "A book that takes you step by step on how to create production-ready APIs with Node.js"
     *      "user_id": 1,
     *      "created_at": "2017-12-22T13:45:56.000Z",
     *      "updated_at": "2017-12-22T13:45:56.000Z"
     *    }
     *  }
     *
     * @apiError {Boolean} status Response Status
     * @apiError {Object} err Response Error
     * @apiErrorExample {json} Error
     * HTTP/1.1 412 Precondition Failed
     *  {
     *    status: false,
     *    err: {}
     *  }
     */
    .post((req, res) => {
      Book.create(req.body)
        .then(book => res.json({ status: true, book }))
        .catch(err => res.status(412).json({ status: false, err }));
    })

    /**
     * @api {get} /books List Books
     * @apiGroup Books
     *
     * @apiSuccess {Boolean} status Response status
     * @apiSuccess {Object[]} book Book list
     * @apiSuccess {Number} book.id Book id
     * @apiSuccess {String} book.title Book title
     * @apiSuccess {String} book.author Book author
     * @apiSuccess {String} book.edition Book edition
     * @apiSuccess {Number} book.year Book year
     * @apiSuccess {String} book.description Book description
     * @apiSuccess {Number} book.user_id User Id
     * @apiSuccess {Date} book.created_at Creation date
     * @apiSuccess {Date} book.updated_at Updates date
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     *  {
     *    success: true,
     *    book: [{
     *      "id": 1,
     *      "title": "Building APIs with Node.js",
     *      "author": "Caio Ribeiro Pereira",
     *      "edition": null,
     *      "year": 2016,
     *      "description": "A book that takes you step by step on how to create production-ready APIs with Node.js",
     *      "created_at": "2017-12-22T13:45:56.000Z",
     *      "updated_at": "2017-12-22T13:45:56.000Z",
     *      "user_id": 1
     *    }]
     *  }
     *
     * @apiError {Boolean} status Response Status
     * @apiError {Object} err Response Error
     * @apiErrorExample {json} Error
     * HTTP/1.1 412 Precondition Failed
     *  {
     *    status: false,
     *    err: {}
     *  }
     */
    .get((req, res) => {
      Book.findAll({})
        .then(book => res.json({ status: true, book }))
        .catch(err => res.status(412).json({ status: false, err }));
    });
};

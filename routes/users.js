'use strict';

module.exports = app => {
  const User = app.db.models.user;

  /**
   * @api {post} /users Create User
   * @apiGroup Users
   *
   * @apiParam {String} name User's name
   * @apiParam {String} email User's email
   * @apiParam {String} username User's username
   * @apiParam {String} password User's password
   * @apiParamExample {json} Input
   *  {
   *    "name": "Oluwasegun Adeleye",
   *    "email": "oluwasegun@bookly.com",
   *    "username": "oluwasegun",
   *    "password": "booklypass"
   *  }
   *
   * @apiSuccess {Boolean} status Response status
   * @apiSuccess {Object} user Created user
   * @apiSuccess {Number} user.id User Id
   * @apiSuccess {String} user.name User's name
   * @apiSuccess {String} user.email User's email
   * @apiSuccess {String} user.username User's username
   * @apiSuccess {String} user.password User's password
   * @apiSuccess {Date} user.created_at Creation date
   * @apiSuccess {Date} user.updated_at Update date
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   *  {
   *    success: true,
   *    user: {
   *      "name": "Oluwasegun Adeleye",
   *      "email": "oluwasegun@bookly.com",
   *      "username": "oluwasegun",
   *      "password": "sdeonnjfeaw23j4330nc",
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
  app.post('/users', (req, res) => {
    User.create(req.body)
      .then(user => res.json({ status: true, user }))
      .catch(err => res.status(412).json({ status: false, err }));
  });
};

module.exports = app => {
  /**
   * @api {get} / API Status
   * @apiGroup Status
   * @apiSuccess {String} message API Status message
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {message: "Bookly. Let's know what you are reading."}
   *
   */
  app.get('/', (req, res) => {
    res.json({ message: "Bookly. Let's know what you are reading." });
  });

  require('./users')(app);
  require('./books')(app);
};

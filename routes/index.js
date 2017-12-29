module.exports = app => {
  app.get('/', (req, res) => {
    res.json({ message: "Bookly. Let's know what you are reading." });
  });

  require('./users')(app);
  require('./books')(app);
};

module.exports = app => {
  app.get('/', (req, res) => {
    res.send("Bookly. Let's know what you are reading")
  })
}

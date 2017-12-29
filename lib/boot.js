module.exports = app => {
  if (process.env.NODE_ENV !== 'test') {
    app.listen(1101, () => console.log('Bookly connected on port 1101'))
  }
}

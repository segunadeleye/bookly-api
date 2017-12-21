module.exports = app => {
  const User = app.db.models.user;

  app.post('/users', (req, res) => {
    User.create(req.body)
      .then(user => res.json({ status: true, user }))
      .catch(err => res.status(412).json({ status: false, err }));
  });
};

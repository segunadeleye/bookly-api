'use strict';

describe('Routes: Users', () => {
  const User = app.db.models.user;

  beforeEach(done => {
    User.destroy({ where: {} });
    done();
  });

  describe('POST /users', () => {
    describe('status 200', () => {
      test('should create user', () => {
        return request
          .post('/users')
          .send({
            name: 'Oluwasegun',
            email: 'oluwasegun@bookly.com',
            username: 'oluwasegun',
            password: 'booklypass',
          })
          .expect(200)
          .then(res => {
            const { status, user } = res.body;
            expect(status).toBe(true);
            expect(user.name).toEqual('Oluwasegun');
            expect(user.email).toEqual('oluwasegun@bookly.com');
            expect(user.username).toEqual('oluwasegun');
          });
      });
    });

    describe('status 412', () => {
      test('should throw error if name, email or password is blank', () => {
        return request
          .post('/users')
          .expect(412)
          .then(res => {
            expect(res.body.status).toBe(false);
          });
      });
    });
  });
});

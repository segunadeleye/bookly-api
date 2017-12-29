'use strict';

it('should load index page', () =>
  request
    .get('/')
    .expect(200)
    .then(res => {
      expect(res.text).toMatchSnapshot();
    }));

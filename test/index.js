var mocha     = require('mocha'),
    assert    = require('chai').assert,
    attributa = require('../lib/index');

describe('attributa', function() {
  var User,
      user,
      data;

  beforeEach(function() {
    User = function() {};
    user = new User();

    data = {
      username: 'jasoki',
      password: 'password',
      email:    'email@gmail.com',
      city:     'Toronto',
      country:  'Canada',
      age:      27
    };
  });

  describe('assign', function() {
    it('should assign values for all attributes', function() {
      attributa.assign(user, data);

      assert.equal(user.username, data.username);
      assert.equal(user.password, data.password);
      assert.equal(user.email, data.email);
      assert.equal(user.city, data.city);
      assert.equal(user.country, data.country);
      assert.equal(user.age, data.age);
    });

    it('should assign values for all attributes', function() {
      User = function(attr) {
        attributa.assign(this, attr);
      };

      user = new User(data);

      assert.equal(user.username, data.username);
      assert.equal(user.password, data.password);
      assert.equal(user.email, data.email);
      assert.equal(user.city, data.city);
      assert.equal(user.country, data.country);
      assert.equal(user.age, data.age);
    });
  });

  describe('assign with only options', function() {
    it('should assign values for only one attribute', function() {
      attributa.only(user, data, 'username');

      assert.equal(user.username, data.username);
      assert.equal(user.password, null);
      assert.equal(user.email, null);
      assert.equal(user.city, null);
      assert.equal(user.country, null);
      assert.equal(user.age, null);
    });

    it('should assign values for only specified attributes', function() {
      attributa.only(user, data, ['username', 'password']);

      assert.equal(user.username, data.username);
      assert.equal(user.password, data.password);
      assert.equal(user.email, null);
      assert.equal(user.city, null);
      assert.equal(user.country, null);
      assert.equal(user.age, null);
    });
  });

  describe('assign with except options', function() {
    it('should assign values for all attributes except one', function() {
      attributa.except(user, data, 'username');

      assert.equal(user.username, null);
      assert.equal(user.password, data.password);
      assert.equal(user.email, data.email);
      assert.equal(user.city, data.city);
      assert.equal(user.country, data.country);
      assert.equal(user.age, data.age);
    });
    it('should assign values for all attributes except specified attributes', function() {
      attributa.except(user, data, ['username', 'password']);

      assert.equal(user.username, null);
      assert.equal(user.password, null);
      assert.equal(user.email, data.email);
      assert.equal(user.city, data.city);
      assert.equal(user.country, data.country);
      assert.equal(user.age, data.age);
    });
  });
});

# Attributa

![Imgur](http://i.imgur.com/Ef0jhBY.png)

Assign attributes to `this` with just one line!

![](https://circleci.com/gh/serv/attributa.svg?style=shield&circle-token=64:ca:2f:b2:2e:33:db:d3:1a:44:ff:14:26:c3:2c:bb)

## Installation

Run

`$ npm install --save attributa`

## Usage

### `assign()`

`attributa.assign(obj, data)`

- `obj`: the object you want to assign the values
- `data`: the data that you want to use to assign value

```js
var attributa = require('attributa');

var data = {
  username: 'jasoki',
  password: 'password',
  email:    'email@gmail.com',
  city:     'Toronto',
  country:  'Canada',
  age:      27
};

var User = function(attr) {
  attributa(this, attr);
};
var user = new User(data);

// user
// { username: 'jasoki',
// password: 'password',
// email: 'email@gmail.com',
// city: 'Toronto',
// country: 'Canada',
// age: 27 }

```

### `only()`

`attributa.only(obj, data, attributes)`

- `obj`: the object you want to assign the values
- `data`: the data that you want to use to assign value
- `attributes`: attribute(s) that you want to assign the value to. accepts a string or an array.

#### `only() for one attribute`

```js
var attributa = require('attributa');

var data = {
  username: 'jasoki',
  password: 'password',
  email:    'email@gmail.com',
  city:     'Toronto',
  country:  'Canada',
  age:      27
};

var User = function(attr) {
  attributa.only(this, attr, 'password');
};
var user = new User(data);

// user
// { username: null,
// password: 'password',
// email: null,
// city: null,
// country: null,
// age: null }
```

#### `only() for multiple attributes`

```js
var attributa = require('attributa');

var data = {
  username: 'jasoki',
  password: 'password',
  email:    'email@gmail.com',
  city:     'Toronto',
  country:  'Canada',
  age:      27
};

var User = function(attr) {
  attributa.only(this, attr, ['password', 'age']);
};
var user = new User(data);

// user
// { username: null,
// password: 'password',
// email: null,
// city: null,
// country: null,
// age: 27 }
```

### `except()`

`attributa.except(obj, data, attributes)`

- `obj`: the object you want to assign the values
- `data`: the data that you want to use to assign value
- `attributes`: attribute(s) that you want to assign the value to. accepts a string or an array.

#### `except() for one attribute`

```js
var attributa = require('attributa');

var data = {
  username: 'jasoki',
  password: 'password',
  email:    'email@gmail.com',
  city:     'Toronto',
  country:  'Canada',
  age:      27
};

var User = function(attr) {
  attributa.except(this, attr, 'username');
};
var user = new User(data);

// user
// { username: null,
// password: 'password',
// email: 'email@gmail.com',
// city: 'Toronto',
// country: 'Canada',
// age: 27 }
```

#### `except() for multiple attributes`

```js
var attributa = require('attributa');

var data = {
  username: 'jasoki',
  password: 'password',
  email:    'email@gmail.com',
  city:     'Toronto',
  country:  'Canada',
  age:      27
};

var User = function(attr) {
  attributa.except(this, attr, ['username', 'password']);
};
var user = new User(data);

// user
// { username: null,
// password: null,
// email: 'email@gmail.com',
// city: 'Toronto',
// country: 'Canada',
// age: 27 }
```

var _ = require('lodash'),
    Attributa;

var Attributa = {

  assign: function(obj, data) {
    _.map(data, function(value, key) {
      obj[key] = value;
    });
  },

  only: function(obj, data, attrs) {
    _.map(data, function(value, key) {

      if (typeof attrs === 'string') {

        if (key === attrs) {
          obj[key] = value;
        } else {
          obj[key] = null;
        }
      } else if (typeof attrs === 'object') {

        if (_.contains(attrs, key)) {
          obj[key] = value;
        } else {
          obj[key] = null;
        }
      }
    });
  },

  except: function(obj, data, attrs) {
    _.map(data, function(value, key) {

      if (typeof attrs === 'string') {

        if (key !== attrs) {
          obj[key] = value;
        } else {
          obj[key] = null;
        }
      } else if (typeof attrs === 'object') {

        if (!_.contains(attrs, key)) {
          obj[key] = value;
        } else {
          obj[key] = null;
        }
      }
    });
  }

};

module.exports = Attributa;

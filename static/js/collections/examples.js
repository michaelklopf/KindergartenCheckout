// static/js/collections/examples.js

var _ = Underscore = require('underscore');
var Backbone = require('backbone');
var Example = require('../models/example.js');

var Examples = Backbone.Collection.extend({
    model : Example,
    url: '/examples'
});

module.exports = Examples;

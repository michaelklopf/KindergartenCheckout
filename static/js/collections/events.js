// static/js/collections/events.js

var _ = Underscore = require('underscore');
var Backbone = require('backbone');
var Event = require('../models/event.js');

var Events = Backbone.Collection.extend({
    model : Event,
    url: '/events'
});

module.exports = Events;

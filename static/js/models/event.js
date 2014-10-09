// static/js/models/event.js

var _ = Underscore = require('underscore');
var Backbone = require('backbone');

var Event = Backbone.Model.extend({
    idAttribute: '_id',

    defaults: {
        name: 'Standard Basar',
        date: '01012014'
    }
});

module.exports = Event;

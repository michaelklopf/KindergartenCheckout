// static/js/models/example.js

var _ = Underscore = require('underscore');
var Backbone = require('backbone');

var Example = Backbone.Model.extend({
    idAttribute: '_id',

    defaults: {
        name: 'Example',
        mail: 'example@example.com'
    }
});

module.exports = Example;

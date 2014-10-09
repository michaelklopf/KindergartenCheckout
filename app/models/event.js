// app/models/event.js

var mongoose    = require('mongoose');
var user        = require('./user');

var eventSchema = new mongoose.Schema({
    name    : String,
    date    : Date,
    user    : [{type : String, ref : 'User'}]
});

module.exports = mongoose.model('Event', eventSchema);

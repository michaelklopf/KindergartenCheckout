// app/models/register.js

var mongoose    = require('mongoose');
var user        = require('./event');

var registerSchema = new mongoose.Schema({
    name      : String,
    user      : String,
    event     : [{type : String, ref : 'Event'}]
});

module.exports = mongoose.model('Register', registerSchema);

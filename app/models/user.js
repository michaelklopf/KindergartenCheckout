// app/models/user.js

var mongoose    = require('mongoose');
var bcrypt      = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  local  : {
    username    : String,
    email       : String,
    firstName   : String,
    lastName    : String,
    password    : String
  }
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);

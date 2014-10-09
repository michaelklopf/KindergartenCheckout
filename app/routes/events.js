// app/routes/events.js

// load models
var Event     = require('../models/event');
var mongoose    = require('mongoose');

module.exports = function(app) {

    // methods to manipulate data
    app.get('/events', isLoggedIn, function(req, res) {
        return Event.find({user : req.user.local.email}, function(err, events) {
            if(!err) {
                return res.send(events);
            } else {
                return console.log(err);
            }
        });
    });

    app.post('/events', isLoggedIn, function(req, res) {
        var event = new Event({
            name: req.body.name,
            date: req.body.date,
            user: req.user.local.email
        });
        event.save(function(err) {
            if (!err) {
                return console.log('created');
            } else {
                return console.log(err);
            }
        });
        return res.send(event);
    });

    app.get('/events/:id', isLoggedIn, function(req, res) {
        return Event.findById({_id : mongoose.Types.ObjectId(req.params.id), user : req.user.local.email}, function(err, event) {
            if(!err) {
                return res.send(event);
            } else {
                return console.log(err);
            }
        });
    });

    app.put('/events/:id', isLoggedIn, function(req, res) {
        console.log('Updating event ' + req.body.name);
        return Event.findById({_id : mongoose.Types.ObjectId(req.params.id), user : req.user.local.email}, function(err, event) {
            event.name = req.body.name;
            event.date = req.body.date;

            return event.save(function(err) {
                if(!err) {
                    console.log('event updated');
                } else {
                    console.log(err);
                }
            });
            return res.send(event);
        });
    });

    app.delete('/events/:id', isLoggedIn, function(req, res) {
        console.log('Deleting event with id: ' + req.params.id);
        return Event.findById({_id : mongoose.Types.ObjectId(req.params.id), user : req.user.local.email}, function(err, event) {
            return event.remove(function(err) {
                if(!err) {
                    console.log('Event removed');
                    return res.send('');
                } else {
                    console.log(err);
                }
            });
        });
    });
}

var isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.redirect('/');
};

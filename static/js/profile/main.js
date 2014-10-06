/**
* @jsx React.DOM
*/
// static/js/profile/main.js

var $ = jQuery = require('jquery');
var bootstrap = require('bootstrap');
var _ = Underscore = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;

var React = require('react');
var PageComponent = require('../views/page.js');

var Router = Backbone.Router.extend({
  routes : {
    "" : "profile"
  },
  profile : function() {
    React.renderComponent(
      <PageComponent router={router} url="/"/>,
      document.querySelector("#container")
    );
  }
});

var router = new Router();

React.renderComponent(
  <PageComponent router={router} url="/" />,
  document.querySelector("#container")
);

Backbone.history.start();

/**
* @jsx React.DOM
*/

// static/js/views/header.js

var React = require('react');
var RouteMixin = require('../routes/routes.js');

var HeaderComponent = React.createClass({
  mixins: [RouteMixin],
  render : function() {
    return(
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" data-toggle="collapse" data-target=".navbar-collapse" className="navbar-toggle">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a onClick={this.navigateToHome} className="navbar-brand">Node Auth</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><a onClick={this.navigateToHome}>Home</a></li>
              <li><a onClick={this.navigateToProfile}>My Profile</a></li>
              <li><a href="/logout"></a></li>
              <li>You are logged in with </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = HeaderComponent;

/**
* @jsx React.DOM
*/
// static/routes/routes.js

var RouteMixin = {
  navigateToHome : function() {
    this.props.router.navigate(
      "#/",
      {trigger: true}
    );
  },
  navigateToProfile : function() {
    this.props.router.navigate(
      "#/profile",
      {trigger: true}
    );
  }
};

module.export = RouteMixin;

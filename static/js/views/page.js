/**
* @jsx React.DOM
*/
// static/js/views/page.js

var ExampleComponent = require('./example_component.js');
var FooterComponent = require('./footer.js');
var HeaderComponent = require('./header.js');
var Examples = require('../collections/examples.js');
var React = require('react');

var collection = {};

var PageComponent = React.createClass({
  componentWillMount : function() {
    collection = new Examples();
    collection.fetch();
  },
  componentWillUnmount : function() {
    collection.reset();
    //React.unmountComponentAtNode(document.getElementById("#container"));
  },
  render : function() {
    return (
      <div className="page-header">
        <h1>Welcome to the template.</h1>
        <p className="lead">This is a lead:</p>
        <ExampleComponent data={collection} />
      </div>
    );
  }
});

module.exports = PageComponent;

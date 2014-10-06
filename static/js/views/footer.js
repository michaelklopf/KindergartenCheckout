/**
* @jsx React.DOM
*/

// static/js/views/footer.js

var React = require('react');

var FooterComponent = React.createClass({
  render : function() {
    return(
      <div id="footer">
        <div className="container">
          <p className="text-muted credit">Page made by me,
            <a href="http://twitter.com/authorname/">@authorname</a>
          </p>
        </div>
      </div>
    );
  }
});

module.exports = FooterComponent;

/**
* @jsx React.DOM
*/

// static/js/views/events.js

var $ = jQuery = require('jquery');
var _ = Underscore = require('underscore');
var React = require('react');

var Event = React.createClass({
  handleDelete : function(event_id) {
    this.props.onDelete(this.props.event_id);
  },
  render : function() {
    return(
      <div className="eventContainer">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.date}</li>
        </ul>
        <button className="delete" onClick={this.handleDelete}>
          Delete Event
        </button>
      </div>
    );
  }
});

var EventForm = React.createClass({
  handleSubmit : function() {
    var name = this.refs.name.getDOMNode().value.trim();
    var date = this.refs.date.getDOMNode().value.trim();
    this.props.onCommentSubmit({name : name, date : date});
    this.refs.name.getDOMNode().value = '';
    this.refs.date.getDOMNode().value = '';
    return false;
  },
  render : function() {
    return(
      <div role="form">
        <label htmlFor="example-input-name">
          Event name
        </label>
        <input type="text" className="form-control" placeholder="Enter Name" ref="name">
        </input>
        <label htmlFor="example-input-mail">
          Event date
        </label>
        <input type="text" className="form-control" placeholder="Enter Date" ref="date">
        </input>
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
          Add Event
        </button>
      </div>
    );
  }
});

var EventList = React.createClass({
  deleteEvent: function(event_id) {
    this.props.onDelete(event_id);
  },
  getEvent: function(eventData) {
    return(
      <Event
        event_id={eventData[0]}
        name={eventData[1]}
        date={eventData[2]}
        onDelete={this.deleteEvent} />
    );
  },
  render : function() {
    var eventData = this.props.data.map(function(event) {
      return(
        [event.get('_id'), event.get('name'), event.get('date')]
      );
    });
    var eventNodes = [];
    for (var i=0, maxLength=eventData.length; i<maxLength; i++) {
      eventNodes.push(this.getEvent(eventData[i]));
    }
    return(
      <div onDelete={this.deleteEvent} >
        {eventNodes}
      </div>
    );
  }
});

var EventComponent = React.createClass({
  handleEventSubmit: function(event) {
    this.props.data.create(event);
  },
  deleteEvent: function(event_id) {
    var event = this.props.data.get(event_id);
    event.destroy(); // remove on server side
    this.props.data.remove(event); // remove from DOM
  },
  getInitialState: function () {
    var updateState = function () {
      this.setState({ data: _.clone(this.props.data.models) });
    };

    this.props.data.on('reset', updateState, this);
    this.props.data.on('add', updateState, this);
    this.props.data.on('remove', updateState, this);

    return { data: _.clone(this.props.data.models) };
  },
  render : function() {
    return(
      <div>
        <EventForm onCommentSubmit={this.handleEventSubmit} />
        <EventList data={this.state.data} onDelete={this.deleteEvent}/>
      </div>
    );
  }
});

module.exports = EventComponent;

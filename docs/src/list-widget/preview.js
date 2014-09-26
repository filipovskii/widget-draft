/** @jsx React.DOM */
'use strict';

var React = require('react/addons'),
    _ = require('lodash');

module.exports = React.createClass({displayName: 'exports',


  handleItemMouseOver: function(key) {
    return function() {
      this.props.emitter.emit('itemMouseOver', key);
    }.bind(this);
  },


  handleItemMouseOut: function(key) {
    return function() {
      this.props.emitter.emit('itemMouseOut', key);
    }.bind(this);
  },


  render: function() {
    var items = _.map(this.props.data, function(item) {
      return (
        React.DOM.li({
          key: item.key, 
          onMouseOver: this.handleItemMouseOver(item.key), 
          onMouseOut: this.handleItemMouseOut(item.key), 
          className: "table-view-cell"}, 
          item.text
        )
      );
    }, this);
    return (
      React.DOM.ul({className: "table-view"}, 
        items
      )
    );
  }

});

/** @jsx React.DOM */
'use strict';

var React = require('react/addons'),
    SCPreview;


SCPreview = React.createClass({
  displayName: 'SegmentedControlPreview',

  getInitialState: function() {
    return {'selectedItem': 0};
  },


  handleClickOn: function(itemKey) {
    return function() {
      this.setState({'selectedItem': itemKey});
    }.bind(this);
  },

  render: function() {
    var menu, cards;

    menu = this.props.data.map(function(item) {
      var linkClasses = React.addons.classSet({
        'control-item': true,
        'active': item.key === this.state.selectedItem
      });

      return (
        React.DOM.a({key: item.key, className: linkClasses, 
           onClick: this.handleClickOn(item.key)}, 
          item.header
        )
      );
    }, this);

    cards = this.props.data.map(function(item) {
      var cardClasses = React.addons.classSet({
        'control-content': true,
        'active': item.key === this.state.selectedItem
      });

      return (
        React.DOM.p({className: cardClasses}, 
          item.content
        )
      );
    }, this);


    return (
      React.DOM.div(null, 
        React.DOM.div({className: "segmented-control"}, 
          menu
        ), 
        React.DOM.div({className: "card"}, 
          cards
        )
      )
    );
  }
});


module.exports = SCPreview;

'use strict';

var _ = require('lodash');

/**
 * An abstraction that is responsible for interactions with host element.
 *
 * Current possible interactions are: data extraction and handling events
 * coming from mobile view.
 *
 * @class
 * @constructor
 *
 * @param {HTMLElement} htmlElement - element to bind host to
 */
function ListWidgetHost(opts) {
  this._hostElement = opts.element;
  this._emitter = opts.emitter;

  this._emitter.on('itemMouseOver', this._handleItemMouseOver.bind(this));
  this._emitter.on('itemMouseOut', this._handleItemMouseOut.bind(this));
}


ListWidgetHost.prototype._handleItemMouseOver = function(itemKey) {
  var li = this._hostElement.querySelectorAll('li')[itemKey];
  li.classList.add('mouseover');
};


ListWidgetHost.prototype._handleItemMouseOut = function(itemKey) {
  var li = this._hostElement.querySelectorAll('li')[itemKey];
  li.classList.remove('mouseover');
};


ListWidgetHost.prototype.extractData = function() {
  return _.map(
    this._hostElement.querySelectorAll('li'),
    function(li, index) {
      return { text: li.innerText, key: index };
    }
  );
};


module.exports = ListWidgetHost;


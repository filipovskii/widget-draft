'use strict';
var _ = require('lodash');

function SCHost(opts) {
  this._hostElement = opts.element;
}


SCHost.prototype.extractData = function() {
  return _.map(
    this._hostElement.querySelectorAll('article'),
    function(article, i) {
      return {
        'header': article.querySelector('header').innerText,
        'content': article.querySelector('p').innerText,
        'key': i
      };
    });
};

module.exports = SCHost;

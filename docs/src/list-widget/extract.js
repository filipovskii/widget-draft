'use strict';
var _ = require('lodash');

module.exports = function(htmlElement) {
  return _.map(
    htmlElement.querySelectorAll('li'),
    function(li, index) {
      return { text: li.innerText, key: index };
    }
  );
};

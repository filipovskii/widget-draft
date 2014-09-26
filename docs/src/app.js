/** @jsx React.DOM */
'use strict';

var React = require('react/addons'),
    ListWidget = require('./list-widget'),
    Emitter = require('tiny-emitter'),
    emitter = new Emitter(),
    ListWidgetPreview = ListWidget.Preview,
    host = new ListWidget.Host({
      element: document.querySelector('.host'),
      emitter: emitter
    });


React.renderComponent(
  ListWidgetPreview({data: host.extractData(), emitter: emitter}),
  document.querySelector('[data-component=preview]')
);


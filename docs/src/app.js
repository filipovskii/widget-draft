/** @jsx React.DOM */
'use strict';

var React = require('react/addons');

function renderListPreview() {
  var ListWidget = require('./list-widget'),
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
}


function renderSegmentedControl() {
  var SC = require('./segmented-control'),
      SCPreview = SC.Preview,
      host = new SC.Host({element: document.querySelector('.sc-host')});

  React.renderComponent(
    SCPreview({data: host.extractData()}),
    document.querySelector('[data-component=sc-preview]')
  );
}

renderListPreview();
renderSegmentedControl();

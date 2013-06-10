define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var myComponent = require('../bower_components/flight-barchart/lib/barchart');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    myComponent.attachTo(document);
  }

});

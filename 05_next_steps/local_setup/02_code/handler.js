'use strict';
const ALEXA = require('alexa-sdk');

module.exports.hello = (event, context, callback) => {
  var alexa = ALEXA.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();

  context.done();
};

var handlers = {
  'Hello': function() {
    this.emit(':tell', 'Hello SharkHack 2018!');
  }
};

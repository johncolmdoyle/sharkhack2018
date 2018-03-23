var Alexa = require('alexa-sdk');

var handlers = {
  'Hello': function() {
    console.log('hello');
    this.emit(':tell', 'Hello SharkHack 2018!');
  },
  'Unhandled': function() {
    console.log('unhandled');
    this.emit(":tell", 'Unhandled!');
  },
};

exports.handler = function(event, context, callback) {
 
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
  
  context.done();
};
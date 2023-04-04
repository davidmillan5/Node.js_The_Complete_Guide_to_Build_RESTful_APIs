'use strict';

const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message);

    //Raise an Event

    //Emit -> Making a noise, produce - signaling | Event Arguments
    this.emit('messageLogged', { id: 1, url: 'http://' });
  }
}

module.exports = Logger;
// module.exports.endPoint = url;

/**
 * Module Wrapper Function
 * (function(exports,require,module,__filename,__dirname){})
 */

'use strict';

var url = 'http://mylogger.io/log';

function log(message) {
  // Send an HTTP request
  console.log(message);
}

module.exports = log;
// module.exports.endPoint = url;

/**
 * Module Wrapper Function
 * (function(exports,require,module,__filename,__dirname){})
 */

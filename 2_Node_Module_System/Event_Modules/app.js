'use strict';
/**
 * EventEmitter is a class (Container for a bunch of related Methods and Properties)
 */

const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register a Listener
logger.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});

logger.log('message');

'use strict';

const fs = require('fs');

//Avoid Using Synchronous Methods
//Asynchronous Methods are not Blocking

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', (err, files) => {
  if (err) console.log('Error', err);
  else console.log('Result', files);
});

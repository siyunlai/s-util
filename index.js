const Promise = require('bluebird');
const lodash = require('lodash');
const fs = require('fs');

Promise.promisifyAll(fs);

function streamToPromise(stream) {
  return new Promise(function(resolve, reject) {
    stream.on('end', resolve);
    stream.on('error', reject);
  });
}

Promise.fromStream = streamToPromise;

exports.default = {
  Promise: Promise,
  _: lodash
};

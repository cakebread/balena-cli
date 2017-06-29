// Generated by CoffeeScript 1.12.6
exports.buffer = function(stream, bufferFile) {
  var Promise, fileWriteStream, fs;
  Promise = require('bluebird');
  fs = require('fs');
  fileWriteStream = fs.createWriteStream(bufferFile);
  return new Promise(function(resolve, reject) {
    return stream.on('error', reject).on('end', resolve).pipe(fileWriteStream);
  }).then(function() {
    return new Promise(function(resolve, reject) {
      return fs.createReadStream(bufferFile).on('open', function() {
        return resolve(this);
      }).on('error', reject);
    });
  });
};
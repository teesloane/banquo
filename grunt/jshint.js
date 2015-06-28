'use strict';

module.exports = {
  options: {
    node: true
  },
  beforeconcat: [
    "Gruntfile.js",
    "<%= dirs.source %>/js/*.js"
  ],
  afterconcat: [
    "Gruntfile.js",
    "<%= dirs.release %>/js/*.js"
  ]
};
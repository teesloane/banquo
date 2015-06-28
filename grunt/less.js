'use strict';

module.exports = {

  staging: {
    options: {
      paths: [
        "<%= dirs.source %>"
      ]
    },
    files: [
      {
        expand: true,
        cwd: '<%= dirs.source %>/css',
        src: ['*.less'],
        dest: '<%= dirs.staging %>/css',
        ext: '.css'
      }
    ]
  },

  release: {
    options: {
      paths: [
        "<%= dirs.source %>"
      ]
    },
    files: [
      {
        expand: true,
        cwd: '<%= dirs.source %>/css',
        src: ['*.less'],
        dest: '<%= dirs.release %>/css',
        ext: '.css'
      }
    ]
  }
};
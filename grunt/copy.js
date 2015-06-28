'use strict';

module.exports = {
  release: {
    files: [
      {
        expand: true,
        cwd: '<%= dirs.source %>',
        src: [
          'js/*.js',
          'fonts/*',
          'images/*'
        ],
        dest: '<%= dirs.release %>',
        filter: 'isFile'
      }
    ]
  },

  staging: {
    files: [
      {
        expand: true,
        cwd: '<%= dirs.source %>',
        src: [
          'js/*.js',
          'fonts/*',
          'images/*',
          'css/*.css'
        ],
        dest: '<%= dirs.staging %>',
        filter: 'isFile'
      }
    ]
  }
};
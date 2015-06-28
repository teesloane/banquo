'use strict';

// Gruntfile.js
module.exports = function (grunt) {

    //loads the various task configuration files
    require('load-grunt-tasks')(grunt);

    // path to tasks and global variables
    var options = {
        // tasks pasth
        config : {
            src: "grunt/*.*"
        },
        pkg : grunt.file.readJSON('package.json'),
        // Global variables
        dirs : {
            source: 'assets',
            staging: 'staging',
            release: 'dist'
        }
    };

    var configs = require( 'load-grunt-configs' )( grunt, options);

    grunt.initConfig( configs );

    grunt.registerTask('default', ['release']);
    grunt.registerTask('watcher', ['watch:watch']);
    grunt.registerTask('release', ['concurrent:test', 'clean:release', 'concurrent:release', 'cssmin']);
    grunt.registerTask('staging', ['concurrent:test', 'clean:staging', 'concurrent:staging']);
};  
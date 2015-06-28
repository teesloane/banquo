'use strict';

module.exports = {
	watch: {
		options: {cwd: '<%= dirs.source %>'},
	  	files: ['js/*.js', 'css/*.less'],
	  	tasks: ['concurrent:test', 'concurrent:staging']
	}
}
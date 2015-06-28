'use strict';

/* Balance processes */
module.exports = {
	release: ['less:release', 'copy:release', 'uglify'],
	staging: ['less:staging', 'copy:staging'],
	test: ['jshint']
}
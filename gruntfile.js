// gruntfile.js

// the wrapper function
module.exports = function(grunt) {

	// project and task configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		* Grunt Sass
		* Compile Sass to CSS using node-sass	
		* https://www.npmjs.com/package/grunt-sass
		*/
		sass: {
	        options: { sourceMap: false },
	        dist: { files: { 'css/styles.css': 'assets/scss/styles.scss' } }
	    }
	});

	// loading Grunt plugins and tasks
	require('load-grunt-tasks')(grunt); // loads 'grunt-'' plugins from package.json

	// default task
	grunt.registerTask('default', ['sass']);

	// custom tasks



}; 	// end wrapper function
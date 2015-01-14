module.exports = function(grunt){

	//entry point to put all task options
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		requirejs:{
			compile:{
				options:{
					baseUrl:".",
    				mainConfigFile:"./app/main.js",
    				name: './app/main',
    				out: "./build/prod/app/app-file.js",
    				optimize: "uglify2",
    				uglify2: {
              			mangle: false
          			}
				}
			}
		}
	}); 

	//Enable grunt plugins declare as devDependencies into package.json

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-requirejs');


	//Register Task
	grunt.registerTask('prod_build',['requirejs:compile']);
}
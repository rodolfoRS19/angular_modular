module.exports = function(grunt){

	//entry point to put all task options
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),

		//compile and minify the app js files and put into /build/prod/app/js/ dir.
		requirejs:{
			compile:{
				options:{
					baseUrl:".",
    				mainConfigFile:"./app/main.js",
    				name: './app/main',
    				out: "./build/prod/app/js/app.min.js",
    				optimize: "uglify2",
    				uglify2: {
              			mangle: false
          			}
				}
			}
		},

		//clean build dir before each prod_build process execution. 
		clean: {
  			prod: ["./build/prod/app"],
  			dev: ["./build/dev/app"]
		},
		//join the app css files and put into build/prod/app/css/ dir. this task must be run just to buil the app to development or test enviroment
		cssjoin: {
		    dev :{
		      options: {
		        paths : ["app/libs/"]
		      },
		      files: {
		        'build/prod/app/css/app.min.css': ['app/libs/common/css/global/loader.css'],
		      },
    		}
  		},

  		//css minification task must be run only to buil_prod task.
  		cssmin: {
		  prod: {
		    files: [{
		      expand: true,
		      cwd: 'app/libs/common/css',
		      src: ['*.loader.css'],
		      dest: 'build/prod/app/css',
		      ext: '.min.css'
		    }]
		  }
		}
	}); 

	//Enable grunt plugins declare as devDependencies into package.json

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-cssjoin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');


	//Register Task
	grunt.registerTask('prod_build',['clean:prod','requirejs:compile','cssmin:prod']);
}
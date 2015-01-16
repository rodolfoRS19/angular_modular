module.exports = function(grunt){

	//entry point to put all task options
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),

		//compile and minify the app js files and put into /build/prod/app/js/ dir.
		requirejs:{
			compile_prod:{
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
			},
			compile_dev:{
				options:{
					baseUrl:".",
    				mainConfigFile:"./app/main.js",
    				name: './app/main',
    				out: "./build/dev/app/js/app.js",
    				optimize: "none",
				}
			}
		},

		//clean build dir before each prod_build process execution. 
		clean: {
  			prod: ["./build/prod/app"],
  			dev: ["./build/dev/app"]
		},

		copy:{
			//copy requirejs file, the app depends of this file to run with sucess the first load 
			require_prod:{
				src: './app/libs/vendor/js/require_plugins/require.min.js',
    			dest: './build/prod/app/js/require.min.js',
			},
			require_dev:{
				src: './app/libs/vendor/js/require_plugins/require.js',
				dest:'./build/dev/app/js/require.js'
			},
			//copy all asset dir to dev or prod dir, base on which build task is running 
			assets_dev:{
				file:[
					{
						expand: true, 
						src: ['./app/assets/**'], 
						dest: './build/dev/app/assets/'
					}
				]
			},
			assets_prod:{
				file:[
					{
						expand: true, 
						src: ['./app/assets/**'], 
						dest: './build/prod/app/assets/'
					}
				]
			}
		},
		//join the app css files and put into build/prod/app/css/ dir. this task must be run just to buil the app to development or test enviroment
		cssjoin: {
		      dev :{
			      files: {
			        'build/dev/app/css/global/app.loader.css': ['app/libs/common/css/app.loader.css']
			      }
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
	grunt.loadNpmTasks('grunt-contrib-copy');


	//Register Task
	grunt.registerTask('prod_build',['clean:prod','requirejs:compile_prod','cssmin:prod','copy:assets_prod','copy:require_prod']);

	grunt.registerTask('dev_build',['clean:dev','requirejs:compile_dev','cssjoin:dev','copy:assets_dev','copy:require_dev']);
}
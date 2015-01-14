({
	baseUrl:".",
    mainConfigFile:"./app/main.js",
    name: './app/main',
    out: "./build/prod/app/app-file.js",
    optimize: "uglify2",
    uglify2: {
              mangle: false
          }
})
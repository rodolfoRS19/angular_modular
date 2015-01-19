// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
    
  // optimizer configuration
  //'generateSourceMaps': true,
  //'preserveLicenseComments': false,
  //'useSourceUrl': true,

  //Root url where requirejs stars to lookup and resolve module id
  baseUrl: '.',

  /*
    third party libraries to us as dependencies on modules loading process.
    "IMPORTANT" don't put here our app modules, cause don't will be load their dependencies.
  */
  paths: {
    jquery: './app/libs/vendor/js/jquery/jquery-1.11.2',
    
    angular: './app/libs/vendor/js/angular/angular',
    router: './app/libs/vendor/js/angular/ui_router',

    require:'.app/libs/vendor/js/require_plugins/require',
    domReady: './app/libs/vendor/js/require_plugins/domready'
  },

  // angular does not support AMD out of the box, put it in a shim
    shim: {
        'require':{
          exports:'require'
        },
        'domReady':{
          deps:["require"],
          exports:'domReady'
        },
        'angular': {
            deps:["jquery"],
            exports: 'angular'
        },
        'router':{
          deps: ["angular"]
        },
    },

    priority:["require","angular"],

    // kick start application
    deps: ['./app/bootstrap']

});


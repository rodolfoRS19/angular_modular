// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({

  //Root url where requirejs stars to lookup and resolve module id
  baseUrl: './',

  /*
    third party libraries to usa as dependencies on modules loading process.
    "IMPORTANT" don't put here our app modules, cause don't will be load their dependencies.
  */
  paths: {
    jquery: 'app/libs/vendor/scripts/jquery/jquery-1.11.2',
    angular: 'app/libs/vendor/scripts/angular/angular',
    router: 'app/libs/vendor/scripts/angular/ui_router',
    domReady: 'app/libs/vendor/scripts/require_plugins/domready'
  },

  // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },
        'router':{
          deps: ['angular'],
        }
    },

    // kick start application
    deps: ['app/bootstrap']

});


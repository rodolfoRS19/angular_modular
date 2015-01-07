// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
    jquery: '../libs/scripts/jquery/jquery-1.11.2',
   	domReady: '../libs/scripts/require/domready',
    angular: '../libs/scripts/angular/angular',
    router: '../libs/scripts/angular/ui_router'
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
    deps: ['./bootstrap']

});


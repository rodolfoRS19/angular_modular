/**
 * bootstraps angular onto the window.document node
 */
define([
    'require',
    'angular',
    './app',
    'domReady'
], function (require, ng, app, domReady) {
    'use strict';

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
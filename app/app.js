define([
    'angular',
    './hello_module/loader'
], function (ng) {
    'use strict';
     return ng.module('app', ['app.helloModule']);
});
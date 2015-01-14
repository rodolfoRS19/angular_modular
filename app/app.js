define([
    'angular',
    'router',
    './src/home/loader'
], function (ng,$stateProvider) {
    'use strict';
     ng.module('app', ['app.home','ui.router'])

     	.config(function($stateProvider){

	 		$stateProvider.state('contacts', {
	 		  url:'/contacts',
			  template: '<h1>{{hello}}</h1>',
			  controller:'homeController'	
			})
     	});
});
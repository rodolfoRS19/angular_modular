define([
    'angular',
    'router',
    './hello_module/loader'
], function (ng,$stateProvider) {
    'use strict';
     ng.module('app', ['app.helloModule','ui.router'])

     	.config(function($stateProvider){

	 		$stateProvider.state('contacts', {
	 		  url:'/contacts',
			  templateUrl: 'app/hello_module/partials/list_persons.html',
			  controller:'personController'
			});
     	});
});
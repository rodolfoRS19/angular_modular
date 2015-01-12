define([
    'angular',
    'router',
    'app/modules/hello_module/loader'
], function (ng,$stateProvider) {
    'use strict';
     ng.module('app', ['app.helloModule','ui.router'])

     	.config(function($stateProvider){

	 		$stateProvider.state('contacts', {
	 		  url:'/contacts',
			  templateUrl: 'app/modules/hello_module/partials/list_persons.html',
			  controller:'personController'
			})
            $stateProvider.state('contacts.details', {
                url:'/:id',
                templateUrl:'app/modules/hello_module/partials/details_contact.html'
            });
     	});
});
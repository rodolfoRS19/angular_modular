define([
    'angular',
    'router',
    './libs/common/js/home/loader'
], function (ng,$stateProvider) {
    'use strict';
     ng.module('app', ['ui.router'])

     .config(function($stateProvider){

	 		$stateProvider.state('contacts', {
	 		  url:'/contacts',
			  templateUrl: 'app/hello_module/partials/list_persons.html',
			  controller:'personController'
			})
            $stateProvider.state('contacts.details', {
                url:'/:id',
                templateUrl:'app/hello_module/partials/details_contact.html'
            });
     	}
});
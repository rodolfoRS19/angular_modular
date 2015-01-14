define([
    'angular',
    'router',
    './libs/common/js/home/loader'
], function (ng,$stateProvider) {
    'use strict';
     ng.module('app', ['app.home','ui.router'])

     .config(function(homeModule,$stateProvider){

	 		$stateProvider.state('contacts', {
	 		  url:'/contacts',
			  template: '<h1>hello</h1>'
			});
     	}
})
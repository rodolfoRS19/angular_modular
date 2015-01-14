define(['./module'],
	function(homeModule){
		'use strict';
    	 homeModule.controller('homeController', ['$scope',function($scope) {
    		$scope.hello = "Hola a Todas!!";
		}]);
	});
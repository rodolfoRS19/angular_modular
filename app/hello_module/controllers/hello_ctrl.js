define(['../module'],
	function(helloModule){
		'use strict';
    	return helloModule.controller('helloController', ['$scope',function($scope) {
    		$scope.hello = "Hola a Todas!!";
		}]);
	});
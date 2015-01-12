define(['../module'],
	function(helloModule){
		'use strict';
    	 helloModule.controller('helloController', ['$scope',function($scope) {
    		$scope.hello = "Hola a Todas!!";
		}]);
	});
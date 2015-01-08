define(['../module'],
	function(helloModule){
		helloModule.controller('personController',['$scope','$stateParams',function($scope){
			$scope.persons = [
				{name:'Usr1', age:23, id:123},
				{name:'Usr2',age:24, id:345},
				{name:'Usr3', age:25,id:567}
			]
		}]);
	})
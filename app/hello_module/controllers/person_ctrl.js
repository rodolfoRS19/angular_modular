define(['../module'],
	function(helloModule){
		helloModule.controller('personController',['$scope',function($scope){
			$scope.persons = [
				{name:'Usr1'},
				{name:'Usr2'},
				{name:'Usr3'}
			]
		}]);
	})
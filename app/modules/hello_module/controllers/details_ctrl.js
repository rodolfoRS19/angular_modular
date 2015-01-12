define(['../module'],function(helloModule){
	helloModule.controller('detailController',['$scope','$stateParams',function($scope,$stateParams){
		contactId = $stateParams.id;

		console.log(contactId);
	}])
});
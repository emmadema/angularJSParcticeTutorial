var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'pages/main.html',
		contorller: 'mainController'
	})

	.when('/second/:num', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	});

});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log){

	$scope.name="mainController";

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams){

	$scope.name="secondController";
	$scope.num = $routeParams.num;

}]);
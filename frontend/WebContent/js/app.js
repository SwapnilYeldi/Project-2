/**
 * angular js module
 */

var app=angular.module("myApp",['ng-route'])
app.config(function($routeProvider){
	$routeProvider
	.when('/registration',{
		templateUrl:'views/registrationform.html',
		controller:'UserController'
	})
	.otherwise({
		templateUrl:'views/home.html'
	})
})
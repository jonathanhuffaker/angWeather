var app = angular.module('angWeather', ['Authorize', 'firebase', 'ngRoute']);

// below was just a test to ensure everything was set up accurately
// app.controller("TestCtrl", function($scope){
// 	$scope.title = "Testing setup";
// 	$scope.tests =[
// 	{name:  "test number one dude"},
// 	{name:  "number two"},
// 	{name:  "tres"},
// 	{name:  "Four the love of humanity..."}

// 	]

// });
app.config(
	['$routeProvider',
			function($routeProvider){
				$routeProvider
						.when('/', {
							templateUrl: '/partials/login.html',
							controller: 'authuserCtrl'
						})
						.when('/weathersearch/', {
						templateUrl: '/partials/weathersearch.html',
						controller: 'weatherCtrl as WeatherCtrl'
						.otherwise({ redirectTo: '/login'});
			}

	]
);
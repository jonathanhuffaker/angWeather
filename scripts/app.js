var app = angular.module('angWeather', []);

app.controller("TestCtrl", function($scope){
	$scope.title = "Testing setup";
	$scope.tests =[
	{name:  "test number one dude"},
	{name:  "number two"},
	{name:  "tres"},
	{name:  "Four the love of humanity..."}

	]

});
var auth = angular.module('Authorize', ['firebase']);

	auth.factory("Auth", ["$firebaseAuth",
	  function($firebaseAuth) {
	    var ref = new Firebase("https://angweather-8c736.firebaseio.com");

	    return $firebaseAuth(ref);

	  }
	]);

	//create a user
	app.controller('authuserCtrl',
		['$scope',
		'Auth',
		'$firebaseArray',
		'$location',
		function($scope, Auth, $currentAcct, $location){
			$scope.createUser = function(){
				Auth.$createUser({
					email: $scope.email,
					password: $scope.password
				}).then(function(userData){
					
					// Changing what i had originaly to reflect order by child - keeping old for safety
					var ref = new Firebase("https://angweather-8c736.firebaseio.com/users/"+userData.uid);
					ref.set({
						email: $scope.email,
						uid: userData.uid
						});

					console.log("user created with id:" +userData.uid);
  					$scope.loginUser();
				}).catch(function(error){
					console.log("user not created with error:" +error);
				});
			};
			$scope.loginUser = function(){
				Auth.$authWithPassword({
					email: $scope.email,
					password: $scope.password
				}).then(function(userData){
					var ref = new Firebase("https://angweather-8c736.firebaseio.com/");
					console.log("user logged in with id:" +userData.uid);
					$location.path("/weathersearch/");
				}).catch(function(error){
					console.log("user not logged with error:" +error);
				});
			};

			$scope.logOut = function(){
				Auth.$unauth();
				console.log("user logged out");
				//redirect back to login page
				$location.path("/");
			};
		}]);
app.controller('weatherCtrl',
		['Auth',
		'$firebaseArray',
		'$location',

			function(Auth, $currentInfo, $location) {
				var authData = Auth.$getAuth();
				var me = authData.auth.uid;
				console.log(me);
				console.log(authData);
				var ref = new Firebase().orderByChild("uid").equalTo(me);
				this.profileInfo = $currentInfo(ref);
				console.log(this.profileInfo);

			}

		]
	);
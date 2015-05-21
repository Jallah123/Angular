module.exports = function($scope, UserFactory) {

	$scope.$watch(function() {
		return UserFactory.getUser();
	}, function(newVal, oldVal) {
		if(typeof newVal !== 'undefined' ) {
			$scope.user = UserFactory.getUser();
		}
	});

	$scope.user = UserFactory.getUser();

	if(UserFactory.isLoggedIn()) {
		$scope.user = UserFactory.getUser();
	};

	$scope.isLoggedIn = function(){
		return UserFactory.isLoggedIn();
	};

	$scope.logOut = function(){
		UserFactory.logOut();
	};

	$scope.getUser = function(){
		return UserFactory.getUser();
	};
};
module.exports = function($scope, UserFactory) {
	var self = this;
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

	self.isLoggedIn = function(){
		return UserFactory.isLoggedIn();
	};

	self.logOut = function(){
		UserFactory.logOut();
	};

	self.getUser = function(){
		return UserFactory.getUser();
	};
};
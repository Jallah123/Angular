module.exports = function($state, $stateParams, $location, UserFactory) {
	UserFactory.saveUser($location.search().username, $location.search().token);
	$state.go('home');
};
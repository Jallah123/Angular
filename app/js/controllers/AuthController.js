module.exports = function($location, $routeParams, UserFactory) {
	UserFactory.saveUser($routeParams['username'], $routeParams['token']);
	console.log($routeParams);
	console.log("test");
	// $location.path('/');
};
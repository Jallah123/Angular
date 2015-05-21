module.exports = function($location, $routeParams, UserFactory) {
	UserFactory.saveUser($routeParams['username'], $routeParams['token']);
	console.log($routeParams);
	$location.url($location.path('/'));
};
module.exports = function($scope, $routeParams ,$cookies) {
	$cookies.put('x-username', $routeParams.username);
	$cookies.put('x-token', $routeParams.token);
	$location.path('/');
};
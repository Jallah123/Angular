module.exports = function($routeParams, GameFactory) {
	$scope.gameId = $routeParams.id;
	console.log($scope.gameId);
};
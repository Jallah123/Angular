module.exports = function($scope, $stateParams, GameFactory, UserFactory) {
	GameFactory.setGame($stateParams.id);
	$scope.game = GameFactory.game;
	$scope.$watch(function() {
		return GameFactory.game;
	}, function(newVal, oldVal) {
		if(typeof newVal !== 'undefined' ) {
			$scope.game = GameFactory.game;
		}
	});

	$scope.selectTile = function(tile){
		console.log(tile);
		if(typeof $scope.game.selectedTile === 'undefined'){
			console.log("first tile");
			$scope.game.selectedTile = tile;
		}else{
			console.log("second tile");
			if(tile.tile.name === $scope.game.selectedTile.tile.name){
				$scope.game.selectedTile = undefined;
				console.log("match");
			}
			else{
				$scope.game.selectedTile = undefined;
				console.log("no match");
			}
		};
	}

	$scope.join = function() {
		var duplicate = false;
		for(var i = 0; i < GameFactory.game.players.length; i++) {
			if(GameFactory.game.players[i]._id == UserFactory.getUser()._id) {
				duplicate = true;
			}
		}
		if(duplicate) {
			alert("You already joined.");
		} else {
			GameFactory.join();
		}
	}
};
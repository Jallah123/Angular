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

	$scope.selectTile2 = function(){
		console.log("hallo");
	};

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
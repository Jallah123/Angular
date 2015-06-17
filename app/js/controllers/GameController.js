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
		if(!isFree(tile)){
			alert("tile not free");
			return;
		}
		if(typeof $scope.game.selectedTile === 'undefined'){
			console.log("first tile");
			$scope.game.selectedTile = tile;
		}else{
			if($scope.game.selectedTile == tile){
				deselectTile();
				return;
			}
			console.log("second tile");
			if(isMatch($scope.game.selectedTile, tile)){
				deselectTile();
				alert("match");
				GameFactory.doMove($scope.game.selectedTile, tile);
			}else{
				deselectTile();
				alert("no match");
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

	deselectTile = function () {
		$scope.game.selectedTile = undefined;
	}
	
	isMatch = function (tile1, tile2) {
		if(tile1.tile.suit == tile2.tile.suit){
			if(tile1.tile.matchesWHoleSuit){
				return true;
			}
			if(tile1.tile.name == tile2.tile.name){
				return true;
			}
		}
		return false;
	}

	isFree = function(tile){
		var hasRightTile = false;
		var hasLeftTile = false;
		var hasTopTile = false;
		var hasBottomTile = false;
		for(var i=0;i<$scope.game.tiles.length;i++){
			if($scope.game.tiles[i].zPos == tile.zPos){
				if($scope.game.tiles[i].xPos == tile.xPos+2 && $scope.game.tiles[i].yPos == tile.yPos){
					hasRightTile = true;
					console.log("has right tile");
				}
				if($scope.game.tiles[i].xPos == tile.xPos-2 && $scope.game.tiles[i].yPos == tile.yPos){
					hasLeftTile = true;
					console.log("has left tile");
				}
				if($scope.game.tiles[i].yPos == tile.yPos-2  && $scope.game.tiles[i].xPos == tile.xPos){
					hasTopTile = true;
					console.log("has top tile");
				}
				if($scope.game.tiles[i].yPos == tile.yPos+2  && $scope.game.tiles[i].xPos == tile.xPos){
					hasBottomTile = true;
					console.log("has bottom tile");
				}
			}
		}
		if(hasOverlayingTile(tile)){
			console.log("overlaying tile");
			return false;
		}
		return !hasTopTile && (!hasLeftTile || !hasRightTile);
	}

	hasOverlayingTile = function(tile){
		for(var i=0;i<$scope.game.tiles.length;i++){
			var x = $scope.game.tiles[i].xPos;
			var y = $scope.game.tiles[i].yPos;
			var z = $scope.game.tiles[i].zPos;

			var inXRange = (x == tile.xPos || x == tile.xPos+1 || x == tile.xPos-1);
			var inYRange = (y == tile.yPos || y == tile.yPos+1 || y == tile.yPos-1);

			if(z == tile.zPos+1){
				if(inXRange && inYRange){
					return true;
				}
			} 
		}
		return false;
	}
};
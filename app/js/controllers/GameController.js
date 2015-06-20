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
		if(!isPlayerJoined()){
			alert("You haven't joined this game");
			return;
		}
		if(!isFree(tile)){
			alert("tile not free");
			return;
		}
		if(typeof $scope.game.selectedTile === 'undefined'){
			console.log("first tile");
			$scope.game.selectedTile = tile;
			$('#tile-' + tile._id + ' > span').toggleClass('selected');
		}else{
			if($scope.game.selectedTile == tile){
				deselectTile();
				return;
			}
			console.log("second tile");
			if(isMatch($scope.game.selectedTile, tile)){
				GameFactory.doMove($scope.game.selectedTile, tile);
				$('#tile-' + tile._id).remove();
				$('#tile-' + $scope.game.selectedTile._id).remove();
				$scope.game.selectedTile.match = {"foundBy":UserFactory.getUser()._id};
				tile.match = {"foundBy":UserFactory.getUser()._id};
				deselectTile();
			}else{
				deselectTile();
				alert("no match");
			}
		};
	}

	$scope.changeColor = function(color){
		console.log("changeColor");
		console.log(color);

		var href = "";
		switch(color.toLowerCase()){
			case'yellow': href = "css/app-yellow.css";
			break;
			case'white': href = "css/app.css";
			break;
		}
		if(href != ""){
			document.getElementById('stylesheet').href = href;
		}
	}

	isPlayerJoined = function(){
		var joined = false;
		for(var i = 0; i < $scope.game.players.length;i++){
			if($scope.game.players[i]._id == UserFactory.getUser()._id) {
				joined = true;
			}
		}
		return joined;
	}

	deselectTile = function () {
		$('#tile-' + $scope.game.selectedTile._id + ' > span').toggleClass('selected');
		$scope.game.selectedTile = undefined;
	}
	
	isMatch = function (tile1, tile2) {
		if(tile1.tile.suit == tile2.tile.suit){
			if(tile1.tile.matchesWholeSuit){
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
			if($scope.game.tiles[i].match != undefined){
				continue;
			}
			var x = $scope.game.tiles[i].xPos;
			var y = $scope.game.tiles[i].yPos;
			var inXRange = (x == tile.xPos || x == tile.xPos+1 || x == tile.xPos-1);
			var inYRange = (y == tile.yPos || y == tile.yPos+1 || y == tile.yPos-1);
			if($scope.game.tiles[i].zPos == tile.zPos){
				if($scope.game.tiles[i].xPos == tile.xPos+2 && inYRange){
					hasRightTile = true;
					console.log("has right tile");
				}
				if($scope.game.tiles[i].xPos == tile.xPos-2 && inYRange){
					hasLeftTile = true;
					console.log("has left tile");
				}
				if($scope.game.tiles[i].yPos == tile.yPos-2  && inXRange){
					hasTopTile = true;
					console.log("has top tile");
				}
				if($scope.game.tiles[i].yPos == tile.yPos+2  && inXRange){
					hasBottomTile = true;
					console.log("has bottom tile");
				}
			}
		}
		if(hasOverlayingTile(tile)){
			console.log("overlaying tile");
			return false;
		}
		return (!hasTopTile || !hasBottomTile) && (!hasLeftTile || !hasRightTile);
	}

	hasOverlayingTile = function(tile){
		for(var i=0;i<$scope.game.tiles.length;i++){
			if($scope.game.tiles[i].match != undefined){
				continue;
			}
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
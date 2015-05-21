module.exports = function($scope, $location, GamesFactory, UserFactory) {
	if(UserFactory.isLoggedIn()) {
		$scope.user = UserFactory.getUser();
	}

	$scope.game = {
		layout: '',
		minPlayers: '',
		maxPlayers: ''
	};

	$scope.$watch(function() {
		return GamesFactory.games;
	}, function(newVal, oldVal) {
		if(typeof newVal !== 'undefined' ) {
			$scope.games = GamesFactory.games;
		}
	});

	$scope.$watch(function() {
		return UserFactory.getUser();
	}, function(newVal, oldVal) {
		if(typeof newVal !== 'undefined' ) {
			$scope.user = UserFactory.getUser();
		}
	});

	$scope.games = GamesFactory.games;

	$scope.isLoggedIn = function(){
		return UserFactory.isLoggedIn();
	};

	$scope.logOut = function(){
		UserFactory.logOut();
	};

	$scope.createGame = function() {
		if($scope.game.$valid){
			$scope.game.createdBy = $scope.user;
			$scope.game.state = "open";
			$scope.game.players = [];
			var game = { "templateName": $scope.game.layout, "minPlayers": $scope.game.minPlayers, "maxPlayers": $scope.game.maxPlayers };
			GamesFactory.addGame(game);
		} else {
			alert("not valid");
		}
	};

	$scope.viewTiles = function(game) {
		GamesFactory.getTilesByGameId(game);
		$location.path("/games/" + game._id);
	};

	$scope.addPlayerToGame = function(game) {
		var duplicateFound = false;
		for(var i = 0; i < game.players.length; i++){
			if(game.players[i] == $scope.user){
				duplicateFound = true;
				alert("duplicate");
				break;
			}
		}
		if(!duplicateFound)
			GamesFactory.addPlayerToGame(game, $scope.user);
	};
};
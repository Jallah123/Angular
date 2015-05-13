module.exports = function($scope, GamesFactory) {
	$scope.user = {
		id: "mmaartijn", // Avans username
		name: "string", // fullname
		email: "string", // avans e-mail
		nickname: "string" // maybe filled later?
	};
	$scope.game = {
		layout: '',
		minPlayers: '',
		maxPlayers: ''
	};
	$scope.games = GamesFactory.games;

	$scope.createGame = function() {
		if($scope.game.$valid){
			$scope.game.createdBy = $scope.user;
			$scope.game.state = "open";
			$scope.game.players = [];
			GamesFactory.addGame($scope.game);
			$scope.addPlayerToGame($scope.game);
		} else {
			alert("not valid");
		}
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
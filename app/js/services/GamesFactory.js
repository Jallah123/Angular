module.exports = function($http) {

	var factory = {};

	factory.games = Array();

	factory.baseUrl = "http://mahjongmayhem.herokuapp.com";

	factory.updateGames = function() {
		var request = $http({
			method: "GET",
			url: this.baseUrl + "/Games"
		});
		factory.games = request.then(function(response) {
			factory.games = response.data }, this.handleError);
	};

	factory.getTilesByGameId = function(game) {
		var request = $http({
			method: "GET",
			url: this.baseUrl + "/Games/" + game.id + "/tiles"
		});
		game.tiles = request.then(function(response) {
			game.tiles = response.data;
		}, this.handleError);
	};

	factory.addPlayerToGame = function(game, user){
		console.log(JSON.stringify(user));
		console.log(game);
		var request = $http({
			method: "POST",
			url: this.baseUrl + "/Games/" + game.id + "/Players"
		});
		request.then(function(response) {
			game.players.push(user);
		}, this.handleError);
	};

	factory.addGame = function(game) {
		console.log(JSON.stringify(game));
		var request = $http({
			method: "POST",
			url: this.baseUrl + "/Games",
			data: "{\"templateName\": \"" + game.templateName + "\",\"minPlayers\":" + game.minPlayers + ",\"maxPlayers\":" + game.maxPlayers + "}"
		});
		request.then(function(response) {
			factory.games.push(response.data);
		}, this.handleError);
	};

	function handleError( response ) {

	}

	factory.handleSuccess = function(response) {
		return( response.data );
	};

	factory.updateGames();
	return factory;
};
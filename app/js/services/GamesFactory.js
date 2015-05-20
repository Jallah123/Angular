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
		game.players.push(user);
	};

	factory.addGame = function(game) {
		var request = $http({
			method: "POST",
			url: this.baseUrl + "/Games",
			data: JSON.stringify(game)
		});
		console.log(JSON.stringify(game));
		/*request.then(function(response) {
			factory.games.push(response.data);
		}, this.handleError);*/
	};

	function handleError( response ) {

	}

	factory.handleSuccess = function(response) {
		return( response.data );
	};

	factory.updateGames();
	return factory;
};
module.exports = function($http) {

	var factory = {};

	factory.game = {};
	factory.selectedTile = {};
	
	factory.baseUrl = "http://mahjongmayhem.herokuapp.com/Games/";

	factory.setGame = function(id) {
		factory.game._id = id;
		var request = $http({
			method: "GET",
			url: this.baseUrl + id
		});
		request.then(function(response) {
			factory.game = response.data;
		}, this.handleError);
		// factory.getPlayers();
		factory.getTiles();
	};

	factory.getTiles = function() {
		var request = $http({
			method: "GET",
			url: this.baseUrl + factory.game._id + "/Tiles"
		});
		request.then(function(response) {
			factory.game.tiles = response.data;
		}, this.handleError);
	};

	factory.getPlayers = function() {
		var request = $http({
			method: "GET",
			url: this.baseUrl + factory.game._id + "/Players"
		});
		request.then(function(response) {
			factory.game.players = response.data;
		}, this.handleError);
	};

	factory.join = function(game, user){
		var request = $http({
			method: "POST",
			url: this.baseUrl + factory.game._id + "/Players"
		});
		request.then(function(response) {
			alert("joined");
		}, this.handleError);
	};

	factory.doMove = function(tile1, tile2){
		var request = $http({
			method: "POST",
			url: this.baseUrl + factory.game._id + "/Tiles/matches",
			data: "{ \"tile1Id\": \"" + tile1._id + "\", \"tile2Id\":\"" + tile2._id + "\"}"
		});
		request.then(function(response) {
		}, this.handleError);
	};

	function handleError( response ) {
		console.log("error");
	}

	return factory;
};
module.exports = function() {

	var factory = {};

	factory.games = [
	{
		"layout": "shanghai", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
		"createdOn": "date", // date + time
		"startedOn": "date", // date + time
		"endedOn": "date", // date + time
		"createdBy": {
			"id": "sidake", // Avans username
			"name": "string", // fullname
			"email": "string", // avans e-mail
			"nickname": "string" // maybe filled later?
		},
		"minPlayers": "number", // 35 <= x >= 1, Required number of players to start
		"maxPlayers": "number",  // 35 <= x >= 1
		"players": [{
			"id": "sidake", // Avans username
			"name": "string", // fullname
			"email": "string", // avans e-mail
			"nickname": "string" // maybe filled later?
			// Properties like score and isWinner maybe filled later
		}],
		"state": "open" // -> 'open'|'playing'|'finished'
	},
	{
		"layout": "snake", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
		"createdOn": "date", // date + time
		"startedOn": "1430327313023", // date + time
		"endedOn": "date", // date + time
		"createdBy": {
			"id": "sidake", // Avans username
			"name": "string", // fullname
			"email": "string", // avans e-mail
			"nickname": "string" // maybe filled later?
		},
		"minPlayers": "number", // 35 <= x >= 1, Required number of players to start
		"maxPlayers": "number",  // 35 <= x >= 1
		"players": [{
			"id": "sidake", // Avans username
			"name": "string", // fullname
			"email": "string", // avans e-mail
			"nickname": "string" // maybe filled later?
			// Properties like score and isWinner maybe filled later
		},
		{
			"id": "jphes", // Avans username
			"name": "string", // fullname
			"email": "string", // avans e-mail
			"nickname": "string" // maybe filled later?
			// Properties like score and isWinner maybe filled later
		}],
		"state": "open" // -> 'open'|'playing'|'finished'
	},
		{
		"layout": "snake", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
		"createdOn": "date", // date + time
		"startedOn": "2430327313023", // date + time
		"endedOn": "date", // date + time
		"createdBy": {
			"id": "sidake", // Avans username
			"name": "string", // fullname
			"email": "string", // avans e-mail
			"nickname": "string" // maybe filled later?
		},
		"minPlayers": "number", // 35 <= x >= 1, Required number of players to start
		"maxPlayers": "number",  // 35 <= x >= 1
		"players": [{
			"id": "sidake", // Avans username
			"name": "string", // fullname
			"email": "string", // avans e-mail
			"nickname": "string" // maybe filled later?
			// Properties like score and isWinner maybe filled later
		},
		{
			"id": "jphes", // Avans username
			"name": "string", // fullname
			"email": "string", // avans e-mail
			"nickname": "string" // maybe filled later?
			// Properties like score and isWinner maybe filled later
		}],
		"state": "playing" // -> 'open'|'playing'|'finished'
	}
	];

	factory.addPlayerToGame = function(game, user){
		game.players.push(user);
	};

	factory.addGame = function(game) {
		factory.games.push(game);
	};

	return factory;
};
module.exports = {
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
};
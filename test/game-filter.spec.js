describe("Game Filters", function() {
	var gameFilter;

	/*
		We vragen hier de module op die we in de app.js gecreëerd hebben.
		Angular-mocks regelt voor ons dat alles geïnitialiseerd wordt.
	*/
	beforeEach(module('angular'));

	/*
		We kunnen verchillende dingen van de app opvragen.
		Services, filters, directives, controllers, scopes, etc

		Angular-mocks gebruikt de inject functie hiervoor.

		We kunnen underscores voor en achter de providers zetten, angular weet dan nog steeds welke providers het zijn
	*/
	beforeEach(inject(function($filter){
		gameFilter = $filter('gameState');
	}));

	it('should return true for open', function(done){
		// Filters zijn het gemakkelijkst te testen omdat ze jouw zelf gemaakte functie returnen.
		var result = gameFilter({ state: "open" }, "open");
		expect(result).to.equal(true);

		done();
	});

	it('should not equal true finished to open', function(done){
		// Filters zijn het gemakkelijkst te testen omdat ze jouw zelf gemaakte functie returnen.
		var result = gameFilter({ state: "finished" }, "open");
		expect(result).to.equal(false);

		done();
	});

	it('should return true finished to finished', function(done){
		// Filters zijn het gemakkelijkst te testen omdat ze jouw zelf gemaakte functie returnen.
		var result = gameFilter({ state: "finished" }, "finished");
		expect(result).to.equal(true);

		done();
	});
});
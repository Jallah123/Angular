describe("Example Directives", function() {
	var tileDirective;
	var $compile;
	var $rootScope;

	/*
		We vragen hier de module op die we in de app.js gecreëerd hebben.
		Angular-mocks regelt voor ons dat alles geïnitialiseerd wordt.
	*/
	beforeEach(module('angular'));

	// load the templates
	// We kunnen deze template laden doordat we gebruik maken van ng-html2js in de karma config.
	// Hierdoor kunnen we de html testen die er uitkomt.
  	beforeEach(module('tileTemplate.html'));

	/*
		We kunnen verchillende dingen van de app opvragen.
		Services, filters, directives, controllers, scopes, etc

		Angular-mocks gebruikt de inject functie hiervoor.

		We kunnen underscores voor en achter de providers zetten, angular weet dan nog steeds welke providers het zijn
	*/
	beforeEach(inject(function(_tileDirective_, _$compile_, _$rootScope_){
		tileDirective = _tileDirective_;
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));

	it('should render the tile directive', function() { 
		// Maak een nieuwe scope die de properties bevat die we willen testen
		var $scope = $rootScope.$new();
		$scope.tile = {
			xPos: 20,
			yPos: 30,
			zPos: 2
		};

		// We maken onze string (die we gebruiken in templates om directives aan te duiden)
		// en compileren deze zodat de directive gecreëerd wordt.
		var element = $compile('<tile tile="tile" on-select="onClick"></tile>')($scope);
		$scope.$digest(); // The scope moet gedigest worden zodat alles aangeroepen wordt.

		// We kunnen de html opvragen en vergelijken met wat we verwachten.
		// In dit geval verwachten we dat de voor- en achternaam achter elkaar in een h3 staan.
		expect(element.html()).to.have.string('<span style="position: absolute; z-index:2;left:410px; top:815px;" class="-">\n</span> ');
	});
});
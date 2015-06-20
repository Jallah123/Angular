describe("UserFactory tests", function() {
	var $controller;
	var $scope;
	var UserFactory;

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
	beforeEach(inject(function(_$controller_, $rootScope, _UserFactory_){
		$scope = $rootScope.$new();
		$controller = _$controller_;
		$scope.$digest();

		UserFactory = _UserFactory_;
		UserFactory.init();
	}));

	it('should get the user', function(done){
		// Vervang persons door iets anders, hierdoor kunnen we dit testen
		UserFactory.user = { id: 'sidake@student.avans.nl', _id: 'sidake@student.avans.nl', token: 'IKBENEENRANDOMSTRING' };

		// Creëer een personController, geef de dependencies aan de constructor by name mee
		var userController = $controller('UserController', { $scope: $scope, UserFactory: UserFactory });

		// Deze roept onze service aan (verwachten we), dus nu kunnen we kijken of dit klopt
		var actualUser = userController.getUser();

		expect(actualUser).to.be.an('object');
		expect(actualUser.id).to.equal('sidake@student.avans.nl');
		expect(actualUser._id).to.equal('sidake@student.avans.nl');
		expect(actualUser.token).to.equal('IKBENEENRANDOMSTRING');
		done();
	});

	it('should login the user', function(done){
		
		// Vervang persons door iets anders, hierdoor kunnen we dit testen
		UserFactory.saveUser("sidake@student.avans.nl", "IKBENEENRANDOMSTRING");

		// Creëer een personController, geef de dependencies aan de constructor by name mee
		var userController = $controller('UserController', { $scope: $scope, UserFactory: UserFactory });

		// Deze roept onze service aan (verwachten we), dus nu kunnen we kijken of dit klopt
		var isLoggedIn = userController.isLoggedIn();

		expect(isLoggedIn).to.equal(true);
		done();
	});

	it('should logout the user', function(done){
		
		UserFactory.saveUser("sidake@student.avans.nl", "IKBENEENRANDOMSTRING");

		var userController = $controller('UserController', { $scope: $scope, UserFactory: UserFactory });

		// Remove the user from the factory
		userController.logOut();
		// actualUser should be empty
		var actualUser = userController.getUser();

		expect(actualUser).to.be.an('object');
		expect(actualUser.id).to.equal('');
		expect(actualUser._id).to.equal('');
		expect(actualUser.token).to.equal('');
		done();
	});
});
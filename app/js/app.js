require('angular/angular');
require('angular-ui-router/build/angular-ui-router');
var app = angular.module('angular', ['ui.router']);

// Require Factories
var gamesFactory = require('./services/GamesFactory.js');
var userFactory = require('./services/UserFactory.js');
var gameFactory = require('./services/GameFactory.js');

// Require Directives
var tileDirective = require('./directives/tile.js');

// Require Controllers
var userController = require('./controllers/UserController.js');
var gameListcontroller = require('./controllers/GameListController.js');
var authController = require('./controllers/AuthController.js');
var gameController = require('./controllers/GameController.js');

// Require Routes
var indexRoutes = require('./routes/index.js');

// Require Filters
var gameFilter = require('./filters/gameFilter.js');

// add routing
app.config(['$stateProvider', '$urlRouterProvider', indexRoutes]);

// Register Directives
app.directive('tile', tileDirective);

// Register Factories
app.factory("GamesFactory", ["$http", gamesFactory]);
app.factory("UserFactory", userFactory);
app.factory("GameFactory", gameFactory);

// Add Filters
app.filter("gameState", gameFilter);

// Register Config
app.factory('httpRequestInterceptor', ['UserFactory', function(UserFactory) {
	return {
		request: function($config) {
			$config.headers['x-username'] = UserFactory.getUser().id;
			$config.headers['x-token'] = UserFactory.getUser().token;
			$config.headers['Content-Type'] = "application/json";
			return $config;
		}
	};
}]);
app.config(function ($httpProvider) {
	$httpProvider.interceptors.push('httpRequestInterceptor');
});

// Register Controllers
app.controller("UserController", ["$scope", "UserFactory", userController]);
app.controller("GameListController", ["$scope", "$state", "GamesFactory", gameListcontroller]);
app.controller("AuthController", ["$state", "$stateParams", "$location", "UserFactory", authController]);
app.controller("GameController", ["$scope", "$stateParams", "GameFactory", "UserFactory", gameController]);
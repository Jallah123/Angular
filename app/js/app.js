require('angular/angular');
var app = angular.module('angular', ['ngRoute']);

// Require Factories
var gamesFactory = require('./services/GamesFactory.js');
var userFactory = require('./services/UserFactory.js');
var gameFactory = require('./services/GameFactory.js');

// Require Controllers
var userController = require('./controllers/UserController.js');
var gameListcontroller = require('./controllers/GameListController.js');
var authController = require('./controllers/AuthController.js');
var gameController = require('./controllers/GameController.js');

// Require Routes
var indexRoutes = require('./routes/index.js');

// Create your app
app.config(['$routeProvider', indexRoutes]);

// Register Factories
app.factory("GamesFactory", ["$http", gamesFactory]);
app.factory("UserFactory", userFactory);
app.factory("GameFactory", gameFactory);

// Register Config
app.factory('httpRequestInterceptor', ['UserFactory', function(UserFactory) {
    return {
        request: function($config) {
            $config.headers['x-username'] = "si.dake@student.avans.nl";
            $config.headers['x-token'] = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.InNpLmRha2VAc3R1ZGVudC5hdmFucy5ubCI.vYVtlL5TEhNn948vFUUrHhULLeJcjL9HoX2dQQ2a-Fs";
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
app.controller("GameListController", ["$scope", "$location", "GamesFactory", gameListcontroller]);
app.controller("AuthController", ["$location", "$routeParams", "UserFactory", authController]);
app.controller("GameController", ["$scope", "$routeParams", "GameFactory", "UserFactory", gameController]);
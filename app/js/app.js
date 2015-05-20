require('angular/angular');
var app = angular.module('angular', ['ngRoute']);

// Require Factories
var gamesFactory = require('./services/GamesFactory.js');
var userFactory = require('./services/UserFactory.js');

// Require Controllers
var gameListcontroller = require('./controllers/GameListController.js');
var authController = require('./controllers/AuthController.js');
var GameControler = require('./controllers/GameControler.js');

// Require Routes
var indexRoutes = require('./routes/index.js');

// Create your app
app.config(['$routeProvider', indexRoutes]);

// Register Factories
app.factory("GamesFactory", ["$http", gamesFactory]);
app.factory("UserFactory", userFactory);

// Register Config
app.factory('httpRequestInterceptor', ['UserFactory', function(UserFactory) {
    return {
        request: function($config) {
        	// $config.headers = {'x-username':'si.dake@student.avans.nl', 'x-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.InNpLmRha2VAc3R1ZGVudC5hdmFucy5ubCI.vYVtlL5TEhNn948vFUUrHhULLeJcjL9HoX2dQQ2a-Fs', "Content-Type": "application/json"}
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
app.controller("GameListController", ["$scope", "GamesFactory", "UserFactory", gameListcontroller]);
app.controller("AuthController", ["$location", "$routeParams", "UserFactory", authController]);
app.controller("GameControler", ["$scope", "$routeParams", "GamesFactory", GameControler]);
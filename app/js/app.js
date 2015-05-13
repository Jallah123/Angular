require('angular/angular');
var app = angular.module('angular', ['ngRoute', 'ngCookies']);

var gamesFactory = require('./services/GamesFactory.js');
var gameListcontroller = require('./controllers/GameListController.js');
var authController = require('./controllers/AuthController.js');
var indexRoutes = require('./routes/index.js');

// Create your app
app.config(['$routeProvider', indexRoutes]);
app.factory("GamesFactory", gamesFactory);
app.controller("GameListController", ["$scope", "GamesFactory", "$cookies", gameListcontroller]);
app.controller("AuthController", ["$scope", "$routeParams", "$cookies", authController]);

require('angular/angular');
var app = angular.module('angular', []);

var gamesFactory = require('./services/GamesFactory.js');
var gameListcontroller = require('./controllers/GameListController.js');

// Create your app
app.factory("GamesFactory", gamesFactory);
app.controller("GameListController", ["$scope", "GamesFactory", gameListcontroller]);
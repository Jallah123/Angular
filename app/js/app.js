require('angular/angular');
var app = angular.module('angular', ['ngRoute']);

var gamesFactory = require('./services/GamesFactory.js');
var userFactory = require('./services/UserFactory.js');
var gameListcontroller = require('./controllers/GameListController.js');
var authController = require('./controllers/AuthController.js');
var indexRoutes = require('./routes/index.js');

// Create your app
app.config(['$routeProvider', indexRoutes]);

app.factory("GamesFactory", ["$http", gamesFactory]);
app.factory("UserFactory", userFactory);
app.factory('httpRequestInterceptor', ['UserFactory', function(UserFactory) {
    return {
        request: function($config) {
        	$config.headers = {'x-username':'si.dake@student.avans.nl', 'x-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.InNpLmRha2VAc3R1ZGVudC5hdmFucy5ubCI.vYVtlL5TEhNn948vFUUrHhULLeJcjL9HoX2dQQ2a-Fs', "Content-Type": "application/json"}
            //$config.headers['username'] = UserFactory.getUser().username;
            //$config.headers['token'] = UserFactory.getUser().token;
            return $config;
        }
    };
}]);
app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
});

app.controller("GameListController", ["$scope", "GamesFactory", "UserFactory", gameListcontroller]);
app.controller("AuthController", ["$location", "$routeParams","UserFactory", authController]);
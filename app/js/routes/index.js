module.exports = function($routeProvider){
  $routeProvider.
  when('/authcallback', {
    controller: 'AuthController',
    templateUrl: './js/templates/authcallback.html'
  }).
  when('/', {
    controller: 'GameListController',
    templateUrl: './js/templates/index.html'
  }).
  when('/games/:id', {
    controller: 'GameController',
    templateUrl: './js/templates/game.html'
  }).
  otherwise({
    redirectTo: '/'
  });
};
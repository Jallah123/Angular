module.exports = function($stateprovider){
  $stateprovider.
  state('authentication', {
    url : '/authcallback',
    controller: 'AuthController',
    templateUrl: './js/templates/authcallback.html'
  }).
  state('home', {
    url : '/',
    controller: 'GameListController',
    templateUrl: './js/templates/index.html'
  }).
  state('game', {
    url : '/games/:id',
    controller: 'GameController',
    templateUrl: './js/templates/game.html'
  }).
  otherwise({
    redirectTo: '/'
  });
};
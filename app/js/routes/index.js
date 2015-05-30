module.exports = function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('authentication', {
    url : '/authcallback',
    controller: 'AuthController',
    templateUrl: './js/templates/authcallback.html'
  })
  .state('home', {
    url : '/',
    controller: 'GameListController',
    templateUrl: './js/templates/index.html'
  })
  .state('game', {
    url : '/games/:id',
    controller: 'GameController',
    templateUrl: './js/templates/game.html'
  }).state('game.board', {
    url: '/board',
    templateUrl: './js/templates/gameBoard.html'
    })
  .state('game.players', {
    url: '/players',
    templateUrl: './js/templates/gamePlayers.html'
    });
};
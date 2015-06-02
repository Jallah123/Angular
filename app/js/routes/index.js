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
  .state('home.all', {
    url : 'all',
    templateUrl: './js/templates/indexAll.html'
  })
  .state('home.active', {
    url : 'active',
    templateUrl: './js/templates/indexActive.html'
  })
  .state('home.open', {
    url : 'open',
    templateUrl: './js/templates/indexOpen.html'
  })
  .state('home.played', {
    url : 'played',
    templateUrl: './js/templates/indexPlayed.html'
  })
  .state('game', {
    url : '/games/:id',
    controller: 'GameController',
    templateUrl: './js/templates/game.html'
  }).state('game.board', {
    url: '/board',
    controller: 'GameController',
    templateUrl: './js/templates/gameBoard.html'
    })
  .state('game.players', {
    url: '/players',
    templateUrl: './js/templates/gamePlayers.html'
    });
};
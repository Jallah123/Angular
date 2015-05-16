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
  otherwise({
    redirectTo: '/'
  });
};
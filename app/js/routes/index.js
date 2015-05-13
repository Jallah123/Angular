module.exports = function($routeProvider){
  $routeProvider.
  when('/authcallback', {
    controller: 'AuthController'
  }).
  when('/', {
    controller: 'GameListController',
    templateUrl: './js/templates/index.html'
  }).
  otherwise({
    redirectTo: '/'
  });
};
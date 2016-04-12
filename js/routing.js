shiro.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
    })
    .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);

(function () {
    'use strict';

    angular
        .module('app')
        .config(['$routeProvider', '$locationProvider', routeConfigurator]);

    function routeConfigurator($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/public/home.html',
                controller: 'home'
            })
            .when('/about', {
                templateUrl: 'app/public/about.html',
                controller: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }
})();
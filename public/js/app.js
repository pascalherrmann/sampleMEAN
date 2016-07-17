'use strict';

//Module
var toDoApp = angular.module('toDoApp', [
    // App-Module
    'toDoAppControllers',
    'toDoAppFilters',
    'toDoAppServices',
    'toDoAppDirectives',
    // Angular-Erweiterungen/Frameworks
    'ngRoute',      
    'ngCookies'
]);

// Routing
toDoApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/', {
                templateUrl: 'html/main.html',
                controller: 'MainController'
            }).
                when('/newGame', {
                templateUrl: 'app/html/newGame.html',
                controller: 'NewGameCtrl'
            }).
                otherwise({
                redirectTo: '/'
            });
    }]);
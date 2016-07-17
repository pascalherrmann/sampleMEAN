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
            }). when('/toDos', {
                templateUrl: 'html/toDos.html',
                controller: 'ToDosController'
            }).
                when('/toDos/:TODOID', {
                templateUrl: 'html/editToDo.html',
                controller: 'EditToDoController'
            }).
                otherwise({
                redirectTo: '/'
            });
    }]);

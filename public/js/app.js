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
                templateUrl: 'html/start.html',
                controller: 'StartController'
            }). when('/toDos', {
                templateUrl: 'html/toDos.html',
                controller: 'ToDosController'
            }).
                when('/toDos/:TODOID', {
                templateUrl: 'html/editToDo.html',
                controller: 'EditToDoController'
            }).
                when('/classic', {
                templateUrl: 'html/classic.html',
                controller: 'ClassicController'
            }).
                otherwise({
                redirectTo: '/'
            });
    }]);

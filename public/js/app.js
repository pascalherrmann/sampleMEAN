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
    'ngCookies',
    //weitere
    'ui.bootstrap'
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
                when('/wiki/:START/:FINISH', {
                templateUrl: 'html/wiki.html',
                controller: 'WikiController'
            }).
                when('/wiki', {
                templateUrl: 'html/wiki.html',
                controller: 'WikiController'
            }).
                when('/classic', {
                templateUrl: 'html/classic.html',
                controller: 'ClassicController'
            }).
                otherwise({
                redirectTo: '/'
            });
    }]);

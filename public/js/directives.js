var directives = angular.module('toDoAppDirectives', []);

directives.directive('navigation', function () {
    return {
        restrict: "E",
        templateUrl: "html/navigation-directive.tpl.html"
    };
});

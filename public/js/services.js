var toDoAppServies = angular.module('toDoAppServices', []);

	// super simple service
	// each function returns a promise object 
	toDoAppServies.factory('ToDoFactory', ['$http',function($http) {
		return {
			getAll : function() {
				return $http.get('/api/todos');
			},
			get : function(id) {
				return $http.get('/api/todos/'+id);
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			update : function(todoData) {
				return $http.put('/api/todos', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			}
		}
	}]);

var services = angular.module('toDoAppServices', []);

	// super simple service
	// each function returns a promise object 
	services.factory('ToDoFactory', ['$http',function($http) {
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


services.factory("utilServices", ["$http", function ($http) {
    return {
        getTypeAhead: function (value) {
            return $http.get("wiki/" + value).then(function (response) {
                return response.data
               /* return response.data.map(function (item) {
                    return item.username;
                });*/
            });
        },
        getCache: function () {
            return $http.get("api/admin/cache");
        },
        cleanCache: function () {
            return $http.post("api/cleanCache/");
        }
    };

}]);

var toDoAppControllers = angular.module('toDoAppControllers', []);


	// inject the Todo service factory into our controller
	toDoAppControllers.controller('MainController', ['$scope','$http','ToDoFactory', function($scope, $http, ToDoFactory) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		ToDoFactory.getAll()
			.success(function(data) {
				$scope.todos = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				ToDoFactory.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			ToDoFactory.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data; // assign our new list of todos
				});
		};

	}]);

	toDoAppControllers.controller('EditToDoController', ['$scope','$http', '$route', '$location', 'ToDoFactory', function($scope, $http, $route, $location,  ToDoFactory) {

        $scope.loading = true;

        var toDoID = $route.current.params.TODOID;


        // Get to Show ==================================================================

        if (toDoID != 0) {
            ToDoFactory.get(toDoID)
            .success(function(data) {
                $scope.task = data;
                $scope.loading = false;
            });

        }else console.log("neu");



            // SAVE: Update and Post ==================================================================

            $scope.saveTask = function() {

                $scope.loading = true;

                if ($scope.task._id !== undefined) {
                    //console.log("update");

                    // call the create function from our service (returns a promise object)
                    ToDoFactory.update($scope.task)

                        // if successful creation, call our get function to get all the new todos
                        .success(function(data) {

                            $scope.loading = false;
                            //$scope.task = {}; // clear the form so our user is ready to enter another
                            //$scope.todos = data; // assign our new list of todos

                            $location.path('/toDos');
                        });


                } else {
                    //console.log("neu");

                    // call the create function from our service (returns a promise object)
                    ToDoFactory.create($scope.task)

                        // if successful creation, call our get function to get all the new todos
                        .success(function(data) {
                            $scope.loading = false;
                            //$scope.task = {}; // clear the form so our user is ready to enter another
                            //$scope.todos = data; // assign our new list of todos
                            $location.path('/toDos');
                        });
                }


            }

        // DELETE ==================================================================
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			ToDoFactory.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.toDos = data; // assign our new list of todos
				});
		};


    }]);

	toDoAppControllers.controller('ToDosController', ['$scope','$http','ToDoFactory', function($scope, $http, ToDoFactory) {

        $scope.loading = true;

		ToDoFactory.getAll()
			.success(function(data) {
				$scope.toDos = data;
				$scope.loading = false;
			});


        // DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			ToDoFactory.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.toDos = data; // assign our new list of todos
				});
		};

    }]);

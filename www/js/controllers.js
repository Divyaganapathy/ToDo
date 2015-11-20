angular.module('controllers', [])

.controller('HomeCtrl', [
  '$scope',
  function($scope) {

  },
  ])
.controller('AccountCtrl', [
  '$scope',
  function($scope) {

  },
  ]);
  .controller('TodosCtrl', function($scope, todos) {
    $scope.todos = todos
  })

  .controller('TodoCtrl', function($scope, todo) {
    $scope.todo = todo
  })
  
  .service('TodosService', function($q) {
    return {
      todos: [
        {
          id: '1',
          name: 'Read the book',
          done: false
        },
        {
          id: '2',
          name: 'Wash the car',
          done: false
        },
        {
          id: '3',
          name: 'Buy the grocery items',
          done: true
        }
      ],
      getTodos: function() {
        return this.todos
      },
      getTodo: function(todoId) {
        var dfd = $q.defer()
        this.todos.forEach(function(todo) {
          if (todo.id === todoId) dfd.resolve(todo)
        })

        return dfd.promise
      }

    }
  });

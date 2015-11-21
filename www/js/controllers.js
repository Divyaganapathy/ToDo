angular.module('ToDo.controllers', [])

.controller('HomeCtrl', [
  '$scope',
  function($scope) {
  },
])
.controller('TodosCtrl', [
  '$scope',
  function($scope) {
  },
])
.controller('TodoCtrl', [
  '$scope',
  function($scope) {
},
])
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    activateaccount: true
  };
});

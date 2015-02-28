var myApp = angular.module("myTestApp", []);

myApp.controller("todosController", ['$scope', function ($scope) {
    $scope.what;
    $scope.who;
    $scope.when;
    
    $scope.todos = [
        {
            what: "AngularJS na Prática",
            who: "Tiago Cedrim",
            when: "28 de Fevereiro"
        },
        {
            what: "Ionic Adventures",
            who: "Juarez Filho",
            when: "28 de Fevereiro"
        },
        {
            what: "ES6",
            who: "Luiz Augusto",
            when: "28 de Fevereiro"
        }
    ];
    
    $scope.addTodo = function () {
        $scope.todo = new Object();
        $scope.todo.what = $scope.what;
        $scope.todo.who = $scope.who;
        $scope.todo.when = $scope.when;
        
        $scope.todos.push($scope.todo);
    }
}]);
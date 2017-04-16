angular.module("demoapp.controllers", [])
.controller("MyCtrl", function ($scope, $http, $interval) {
    $scope.searchKey = "gnnhakan";
    $scope.Search = function (key) {
        $http.get("https://api.github.com/users/" + key).success(function (response) {
            $scope.User = response;
            $http.get($scope.User.repos_url).success(function (data) {
                $scope.repository = data;
            }).error(function (ex) {
                console.log(ex)
            })
        }).error(function (ex) {
            console.log(ex)
        });
    }
});
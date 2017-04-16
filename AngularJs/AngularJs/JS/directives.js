var directApp = angular.module("demoapp.directApp", []);

directApp.directive("searchUser", function () {
    return {
        restrict: 'A',
        template: 'Search User:<input type="text" class="form-control" ng-model="searchKey"><input type="button" value="Search User" class="btn btn-default ng-click="Search(searchKey)" />'
    };
});
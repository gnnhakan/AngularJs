angular.module('demoapp', ['demoapp.controllers', 'demoapp.directApp'])
.factory('$exceptionHandler', function () {
    return function (exception, cause) {
        exception.message += ' cause by' + cause;
       // alert(exception.message); // hknhkn remove before deploy
    }
});
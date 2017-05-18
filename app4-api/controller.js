angular.module("totesCoolApp").controller("totesCoolController", function ($scope, totesCoolService) {

    $scope.brokenController = "C to the W"


    $scope.brokenService = totesCoolService.brokenService

    $scope.getData = function () {
        totesCoolService.getData().then(function (response) {
            $scope.rebel = response.data
        })
    }
    $scope.getData()




})
angular.module("app").controller("coolController", function ($scope, radService) {

    $scope.totsBrokenController = "hey my controller works"

$scope.brokenService = radService.brokenService


$scope.theseGuys = radService.getData()



})
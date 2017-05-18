angular.module("nameofApp").controller("nameOfController", function($scope, nameOfService){

$scope.brokenController = "working cont"
$scope.brokenService = nameOfService.brokenService

$scope.objects = nameOfService.objects()





})






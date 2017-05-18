angular.module("arrayApp").controller("arrayController", function($scope, theService){


$scope.ServiceBroken = theService.ServiceBroken

$scope.ControllerBroken = "Controller not broken"


$scope.world = theService.myList()





})
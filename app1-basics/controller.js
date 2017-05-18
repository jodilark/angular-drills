angular.module("myApplication").controller("mycontroller", function($scope, myNewService){
    $scope.ControlBroken ="Control Works"
    $scope.ServiceBroken = myNewService.ServiceBroken
})
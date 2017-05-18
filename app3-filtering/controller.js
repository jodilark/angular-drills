angular.module("immaApp").controller("immaController", function ($scope, immaService){



		$scope.onlyControllerB = "working controller"
		$scope.onlyServiceB = immaService.onlyServiceB


$scope.allTheData = immaService.allTheData()








})




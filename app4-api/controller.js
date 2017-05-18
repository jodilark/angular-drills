angular.module("swApp").controller("swController", function ($scope, swService){



		$scope.brokenSWCont = "hey i work and i am a controller"
		$scope.brokenSWServ = swService.brokenSWServ


$scope.swStat = function (){
    swService.swData().then(function (response){
        $scope.swInfo = response.data
    })
}
$scope.swStat()









})
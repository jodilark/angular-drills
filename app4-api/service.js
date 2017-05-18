angular.module("swApp").service("swService", function ($http){

this.brokenSWServ = "woring service"

this.swData = function (){
    return $http.get("http://swapi.co/api/people/1/")
}



})
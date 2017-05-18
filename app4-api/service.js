angular.module("totesCoolApp").service("totesCoolService", function ($http) {


    this.brokenService = "s to the dub"


this.getData = function (){
    return $http.get("http://swapi.co/api/people/1/")
}

})
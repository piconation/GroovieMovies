(function () {

	angular.module('myApp')

		.service('flickService', flickService);
            function flickService($http){
                var vm = this;   

			  		return{
					     getFlick: function(movieName){
					            // this is are call to pull down the api
					            return $http.get('http://www.omdbapi.com/?s=' + math.random, + movieName)
					            .success(function(response){
					            var actors = response.Actors;
					            console.log(response);
					            var theFlick = response;
					            console.log(theFlick.Actors);
					        }); 
						}
					};
				}
		})();
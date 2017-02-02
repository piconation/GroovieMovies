(function () {

        angular.module('myApp')

           .service('movieService', movieService);
            function movieService($http){
                var vm = this;
               // return is retrun api call to movieName

                return{

                    getMovie: function(movieName){
                        // this is are call to pull down the api
                        return $http.get('http://www.omdbapi.com/?t=' + movieName)
                        .success(function(response){
                        var actors = response.Actors;
                        // console.log(response);
                        var theMovie = response;
                        // console.log(theMovie.Actors);
                        });

                    random: function(movieFlick){
                        // this is our call to pull down the api
                        return $http.get('http://www.omdbapi.com/?t=' + math.random)
                        .success(function(reply){
                        var actors = reply.Actors;
                        // console.log(response);
                        var theFlick = reply;
                        // console.log(theMovie.Actors);
                        });
                    }
                };
        
           }

            
    })();

    
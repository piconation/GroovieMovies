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
                            // console.log(go here);

                        getFlick: function(movieFlick){
                            // this is are call to pull down the api
                            return $http.get('http://www.omdbapi.com/?t=' + math.random)
                            .success(function(response){
                            var actors = response.Actors;
                            console.log(response);
                            var theFlick = response;
                            console.log(theMovie.Actors);
                            });
                        }
                    }

                }
            }          
    })();

    
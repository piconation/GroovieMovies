(function () {

        angular.module('myApp')


           .service('movieService', movieService);
            function movieService($http){
                var vm = this;
                                console.log('in service');

               // return is retrun api call to movieName
                
                return{

                    getMovie: function(movieName){
                                        console.log('in get movie');

                        // this is are call to pull down the api
                        return $http.get('http://www.omdbapi.com/?t=' + movieName)
                        .success(function(response){
                        var actors = response.Actors;
                        console.log(response);
                        var theMovie = response;
                        // console.log(theMovie.Actors);
                        });


                    }

                };
            }          
    })();


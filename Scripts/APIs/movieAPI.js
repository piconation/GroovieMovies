(function () {

        angular.module('myApp')

           .service('movieService', movieService);

             // myApp.service("movieService", function($http)
            function movieService($http)
             {
                var vm = this;
                // vm.save = save;
                // var sharedService = {};

                // sharedService.reqestedMovieName = '';

                // sharedService.prepForBroadcast = function(movieName){
                //     this.reqestedMovieName = movieName;
                //       this.broadcastItem();
                //     console.log(movieName);
                // };
                
                // sharedService.broadcastItem = function(){
                //     $rootScope.$broadcast('handleBradcast');
                // }

                // function save(movieName){
                //     // console.log(movieName);
                // }
                // console.log(vm.movieName);
                // var deferred = $q.defer();
                // need to get movie varible to are service
                // $http.get('http://www.omdbapi.com/?t=' +  +);

                return{
                 getMovie: function(movieName){
                    return $http.get('http://www.omdbapi.com/?t=' + movieName).success(function(response){
                        var actors = response.Actors;
                        console.log(actors);
                    });
                 }
                };
                // $http.get('http://www.omdbapi.com/?t=' + "starwars")
                // .success(function(response) {
                //     vm.movieSpecs = response;
                // });
             }

                // $http.get('http://www.omdbapi.com/?t=' + 'starwars')
                // .success(function(response) {
                //     vm.movieSpecs = response;
                // });
             
            
    })();
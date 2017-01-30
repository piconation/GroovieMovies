(function () {

        angular.module('myApp')
           .service('movieService', movieService);

             // myApp.service("movieService", function($http)
            function movieService($http)
             {
                var vm = this;

                console.log(vm.movieName);
                // var deferred = $q.defer();
                // need to get movie varible to are service
                // $http.get('http://www.omdbapi.com/?t=' +  +);
                $http.get('http://www.omdbapi.com/?t=' + 'starwars')
                .success(function(response) {
                    vm.movieSpecs = response;
                });
             }
            
    })();
(function () {

        angular.module('myApp')
            .component('movie', { // the tag for using this is <char-detail>
                templateUrl: "Templates/movie.template.html",
                controller: moviePageController
               


            })
            //  .config(homePageConfig):

            // function moviePageConfig($stateprovider){
            //     $stateprovider.state('movie', {
            //         url:'/movie',
            //         template: '<movie></movie>'
            //     });

        function moviePageController(movieService ,$http) {
            var vm = this;
            // vm.movieName = movieName;
            vm.send = send;
            // vm.method = 'POST';
            // vm.url = 'Scripts/APIs/movieAPI.js';
            

            function send(movieName) {

                            console.log(movieService.getMovie(movieName));
                // movieService.prepForBroadcast(movieName);
                // console.log(movieName);
                movieName = movieName;
                // movieService.add
            }

            // var promise = movieService.getMovie();
            // promise.then(function (data){
            //     $scope.moviemovie = movie;
            //     console.log(moviemovie);
            // })

        }
            
    })();
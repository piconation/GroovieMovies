(function () {

        angular.module('myApp')
            .component('movie', { // the tag for using this is <char-detail>
                templateUrl: "Templates/movie.template.html",
                controller: homePageController,
               

            });
        function homePageController(movieService) {
            var vm = this;
            // vm.movieName = movieName;
            vm.send = send;
            

            function send(movieName) {
                // body..
                // console.log(movieName);
                vm.movieName = movieName;
                movieService.addP
            }
            console.log(movieService);

            // var promise = movieService.getMovie();
            // promise.then(function (data){
            //     $scope.moviemovie = movie;
            //     console.log(moviemovie);
            // })

        }
            
    }

    )();
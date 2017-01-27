(function () {

        angular.module('myApp')
            .component('movie', { // the tag for using this is <char-detail>
                templateUrl: "Templates/movie.template.html",
                controller: homePageController,
               


            })
            //  .config(homePageConfig)

            // function moviePageConfig($stateprovider){
            //     $stateprovider.state('movie', {
            //         url:'/movie',
            //         template: '<movie></movie>'
            //     });

        function homePageController(movieService) {
            var vm = this;
            // vm.movieName = movieName;
            vm.send = send;
            // vm.author = author;
            // vm.released = released;
            // vm.genre = genre;
            // vm.plot = plot;
            
                            // console.log(movieService.getMovie(movieName));

          
            function send(movieName) {
                console.log(movieService.getMovie(movieName));
            //       author = movieService.getMovie(movieName).author;
            // released = movieService.getMovie(movieName).released;
            // genre = movieService.getMovie(movieName).genre;
            // plot = movieService.getMovie(movieName).plot;

            // console.log(author);
            // console.log(movieService.getMovie(movieName).released);
                // console.log(movieName);
                // console.log(movieService.getMovie(movieName));
                               
            }
            // console.log(movieService);

            // var promise = movieService.getMovie();
            // promise.then(function (data){
            //     vm.moviemovie = movie;
            //     console.log(moviemovie);
            // })

        }
    }
    )();
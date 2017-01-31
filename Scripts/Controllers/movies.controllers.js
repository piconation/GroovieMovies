(function () {

        angular.module('myApp')
            .component('movie', { // the tag for using this is <char-detail>
                templateUrl: "Templates/movie.template.html",
                controllerAs: moviePageController
            })
        

        function moviePageController(movieService) {
            console.log('this is a console log');
            var vm = this;

            // vm.movieName = movieName;
            vm.send = send;
            vm.title4 = 'Warn';
             console.log('movieService');

            // vm.author = author;
            // vm.released = released;
            // vm.genre = genre;
            // vm.plot = plot;
            
            // console.log(movieService.getMovie(movieName));


          
            function send(movieName) {
                console.log(movieService.getMovie(movieName));
            // author = movieService.getMovie(movieName).author;
            // released = movieService.getMovie(movieName).released;
            // genre = movieService.getMovie(movieName).genre;
            // plot = movieService.getMovie(movieName).plot;

            // console.log(author);
            // console.log(movieService.getMovie(movieName).released);
                // console.log(movieName);

                vm.movieName = movieName;
               
            }

                // console.log(movieService.getMovie(movieName));
                               
            }
            // console.log(movieService);

            // var promise = movieService.getMovie();
            // promise.then(function (data){
            //     vm.moviemovie = movie;
            //     console.log(moviemovie);
            // })

        
            
})();


(function () {

        angular.module('myApp')
            .component('movie', { // the tag for using this is <char-detail>
                templateUrl: "Templates/movie.template.html",
                controller: moviePageController
               


            })

            //  .config(moviePageConfig)

            // function moviePageConfig($stateprovider){
            //     $stateprovider.state('movie', {
            //         url:'/movie',
            //         template: '<movie></movie>'
            //     })

        function moviePageController(movieService) {
            var vm = this;
            // vm.movieName = movieName;
            vm.send = send;
             console.log(movieService);

            function send(movieName) {
                // body..
                // console.log(movieName);
                vm.movieName = movieName;
                // movieService.addP
            }
           

            // var promise = movieService.getMovie();
            // promise.then(function (data){
            //     $scope.moviemovie = movie;
            //     console.log(moviemovie);
            // })

        }
            
})();
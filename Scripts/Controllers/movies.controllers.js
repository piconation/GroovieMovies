(function () {

        angular.module('myApp')
            .component('movie', { // the tag for using this is <char-detail>
                templateUrl: "Templates/movie.template.html",
                controller: moviePageController,
                controllerAs: 'vm'
                
            })
            .config(moviePageConfig);

            function moviePageConfig($stateProvider){
                $stateProvider.state('movie', {
                    url: '/movie',
                    template:'<movie></movie>'
                });
            }

        function moviePageController(movieService, $scope) {
            var vm = this;
            vm.send = send; 
            vm.random = random;

            vm.title4 = 'Warn';
             console.log('movieService');


            // this is doing nothing
            var theActors = $scope.theActors;
            var theGenre = $scope.theGenre;
            var theTitle = $scope.theTitle;
            var thePlot = $scope.thePlot;
            var theYear = $scope.theYear;
          
          
            function send(movieName) {
                // this is calling are service and giveing us accsess to the varibles 
                movieService.getMovie(movieName).success(function(response){
                    var theMovie = response;
                    console.log(response);
                    console.log(theMovie.Actors);
                    // this is setting varibles to are scope from service
                    $scope.theActors = theMovie.Actors;
                    $scope.theGenre = theMovie.Genre;
                    $scope.theTitle = theMovie.Title;
                    $scope.thePlot = theMovie.Plot;
                    $scope.theYear = theMovie.Year;

               }); 

                   function random(movieFlick) {
                    // this is calling are service and giveing us accsess to the varibles 
                         movieService.random(movieFlick).success(function(response){
                            var theFlick = random;

                        // this is setting varibles to are scope from service
                        $scope.theActors = theFlick.Actors;
                        $scope.theGenre = theFlick.Genre;
                        $scope.theTitle = theFlick.Title;
                        $scope.thePlot = theFlick.Plot;
                        $scope.theYear = theFlick.Year;
                   });

               }       

            } 
                              
        }      
})();


(function () {

        angular.module('myApp')
            .component('movie', { // the tag for using this is <char-detail>
                templateUrl: "Templates/movie.template.html",
                controller: homePageController,
               

            });
        function homePageController() {
            var vm = this;

        }
            
    }

    )();
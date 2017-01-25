(function () {

        angular.module('myApp')
            .component('movie', { // the tag for using this is <char-detail>
                templateUrl: "Templates/movie.template.html",
                controller: homePageController,
               

            })
             .config(homePageConfig):

            function moviePageConfig($stateprovider){
                $stateprovider.state('movie', {
                    url:'/movie',
                    template: '<movie></movie>'
                });

        function homePageController() {
            var vm = this;

        }
            
    }

    )();
(function () {

        angular.module('myApp')
            .component('home', { // the tag for using this is <char-detail>
                templateUrl: "Templates/home.template.html",
                controller: homePageController,

               

            })
            
            // .config(homePageConfig)

            // function homePageConfig($stateprovider){
            //     $stateprovider.state('home', {
            //         url:'/home',
            //         template: '<home></home>'
            //     });
            // }

        function homePageController() {
            var vm = this;
            console.log("in homecontroller");
            
        }
            
    }

    )();
(function(){

    // this CREATES the myApp module (because it has the second, array parameter)

   angular.module('myApp', ['ui.router', 'carousel'])
       // .config(myAppConfig);


       .config(function($urlRouterProvider, $stateProvider){
           $urlRouterProvider.otherwise('/homePage')

             $stateProvider
                .state('home', {
                  url: "/homePage",
                  templateUrl: "Templates/home.template.html",
                  controllerAs: 'homePageController',
                  // controllerAs: "homePageCtrl"
                })
            
                .state('movie', {
                  url: "/moviePage",
                  templateUrl: "Templates/movie.template.html",  
                  controllerAs: 'moviePageController',
                  // controllerAs: "moviePageCtrl"
              })

                function myAppConfig($urlRouterProvider){
                    $urlRouterProvider.otherwise('/home');
                }

        });    
        
})();
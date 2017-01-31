(function(){

    // this CREATES the myApp module (because it has the second, array parameter)

   angular.module('myApp', ['ui.router'])
   // ['ui.router', 'ngMaterial', 'ngMessages']
       // .config(myAppConfig);


       .config(function($urlRouterProvider, $stateProvider){
           $urlRouterProvider.otherwise('/homePage')

             $stateProvider
                .state('home', {
                  url: "/homePage",
                  templateUrl: "Templates/home.template.html",
                  controller: 'homePageController',
                  // controllerAs: "homePageCtrl"
                })
            
                .state('movie', {
                  url: "/moviePage",
                  templateUrl: "Templates/movie.template.html",  
                  controller: 'moviePageController',
                  // controllerAs: "moviePageCtrl"
              })

                // function myAppConfig($urlRouterProvider){
                //     $urlRouterProvider.otherwise('/home');
                // }

        });    
        
})();
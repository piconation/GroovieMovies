(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('myApp', ['ui.router', 'ngMaterial'])
        // .config(myAppConfig);

        .config(function($urlRouterProvider, $stateProvider){
        	$urlRouterProvider.otherwise('/homePage')

        	  $stateProvider
			    .state('home', {
			      url: "/homePage",
			      templateUrl: "Templates/home.template.html"
			    })
			 
			    .state('movie', {
			      url: "/moviePage",
			      templateUrl: "Templates/movie.template.html"  	
				})
		});
		
})();
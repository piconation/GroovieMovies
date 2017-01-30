(function () {

        angular.module('myApp')
            .component('home', { // the tag for using this is <char-detail>
                templateUrl: "Templates/home.template.html",
                controller: homePageController,
                controllerAs: vm
        })
  
        function homePageController() {
            var vm = this;
            console.log("in homecontroller");
            vm.dataArray = [
            { src:'/img/bttf.jpg' },
            { src:'/img/starwars.jpg' },
            { src:'/img/lost-ark.jpeg' }
            ];    
        }
            
    }

    )();
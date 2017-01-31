(function () {

        angular.module('myApp')
            .component('home', { // the tag for using this is <char-detail>
                templateUrl: "Templates/home.template.html",
                controller: homePageController,

                constollerAs: 'vm'

        })
            .config(homePageConfig);

            function homePageConfig($stateProvider){
                $stateProvider.state('home', {
                    url: '/home',
                    template:'<home></home>'
                });
            }
  
        function homePageController() {
            var vm = this;
            console.log("in homecontroller");
            vm.dataArray = [
            { src:'https://images-na.ssl-images-amazon.com/images/I/51a3mzh6ymL.jpg' },
            { src:'https://images-na.ssl-images-amazon.com/images/I/71AttSsJg3L._SY550_.jpg' },
            { src:'http://www.panicposters.com/media/catalog/product/cache/1/image/f63dc5ec28f3175f8a7f615bd217eb71/p/p/pp31453-raiders-of-the-lost-ark-poster.jpg' }
            ];    
        }
            
    }

    )();
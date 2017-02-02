(function () {

        angular.module('myApp')
            .component('home', { // the tag for using this is <char-detail>
                templateUrl: "Templates/home.template.html",
                controller: homePageController,

                controllerAs: 'vm'

        })
            .config(homePageConfig);

            function homePageConfig($stateProvider){
                $stateProvider.state('home', {
                    url: '/home',
                    template:'<home></home>'
                });
            }
  
        function homePageController($scope) {
            var vm = this;
            console.log("in homecontroller");
            $scope.dataArray = [
            { src:'http://moviereviews.s3.amazonaws.com/2015/09/05/08/38/55/6/grh3hjMsUJwIdZw92Li4tOGn3yK.jpg' },
            { src:'https://jedi-bibliothek.de/blog/wp-content/uploads/2015/07/SWTrilogyBarnesNobleHCPoster.jpg' },
            { src:'http://cdn.gelestatic.it/deejay/www/2015/09/RaidersOfTheLostArk.jpg' },
            { src:'https://i.jeded.com/i/austin-powers-the-spy-who-shagged-me.13904.jpg'},
            { src:"https://upload.wikimedia.org/wikipedia/en/e/e0/Wayne's_World.jpg"},
            { src:'http://retrotimemachine.weebly.com/uploads/1/0/5/3/10534619/3843297_orig.jpg'}
            ];    
        }
            
    }

    )();
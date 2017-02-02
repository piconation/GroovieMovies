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
            { src:'https://image.tmdb.org/t/p/w1280/cTF8lpXvAwT1SLH9kVFZZl0AO0D.jpg'},
            { src:'https://pbs.twimg.com/media/CnU80WyUEAI48az.jpg'},
            { src:'https://i.jeded.com/i/austin-powers-the-spy-who-shagged-me.13904.jpg'},
            { src:"https://upload.wikimedia.org/wikipedia/en/e/e0/Wayne's_World.jpg"},
            { src:'http://retrotimemachine.weebly.com/uploads/1/0/5/3/10534619/3843297_orig.jpg'}
            ];  



//             (function(){angular.module("jkAngularCarousel.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("carousel-directive.html","<div class=\"jk-carousel\" >\n\n  <div class=\"slides-container\" layout=\"row\" >\n    <div\n      ng-repeat=\"slideItem in ctrl.cloneData\"\n      class=\"slide\"\n    >\n      <div ng-include=\"ctrl.itemTemplateUrl\" ></div>\n    </div>\n  </div>\n\n  <md-button class=\"md-icon-button left-arrow-button\" >\n    <md-icon ng-click=\"ctrl.navigateLeft()\" >chevron_left</md-icon>\n  </md-button>\n\n  <md-button class=\"md-icon-button right-arrow-button\" >\n    <md-icon ng-click=\"ctrl.navigateRight()\" >chevron_right</md-icon>\n  </md-button>\n\n  <md-radio-group\n    class=\"radio-buttons-container\"\n    layout=\"row\"\n    ng-model=\"ctrl.radioButtonIndex\"\n    layout-align=\"center center\"\n    ng-change=\"ctrl.onRadioButtonClick()\" >\n    <md-radio-button\n      ng-repeat=\"item in ctrl.data\"\n      ng-value=\"$index\"\n      aria-label=\"$index\" >\n    </md-radio-button>\n  </md-radio-group>\n\n</div>\n");}]);})(); 

        }
            
    }

    )();
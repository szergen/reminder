'use strict';
angular.
    module('mainPageRo').
        component('mainPageRo', {
            templateUrl: 'scripts/main-page-ro/main-page-ro.template.html',
            controller: ['$http', function mainPageRoController($http) {
                var self = this;
                self.test = "traklalalalala";
                var wheight = $(window).height()-100;
                
        $('.fullHeight').css('height', wheight);
        console.log("slider ba");

        $('#myCarousel .item img').each(function() {
                var imgSrc = $(this).attr('src');
            console.log(imgSrc);
                $(this).parent().css({'background-image': 'url('+imgSrc+')'});
                $(this).remove();
                console.log("a mers");
            });
              
        $(window).resize(function(){
                wheight = $(window).height();
                $('.fullHeight').css('height', wheight);
            });
        $('.carousel').carousel({
          interval: 5000
        })
              
                /*   
                $http.get('phones/phones.json').then(function(response) {
                    self.phones = response.data;
                }); 
                */
            }]
});